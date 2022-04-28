import * as t from '@babel/types';
import { identifier, tsPropertySignature } from './utils';

const NATIVE_TYPES = [
    'string',
    'int32',
    'uint32',
    'int64',
    'uint64',
    'double',
    'bytes',
    'bool',
]

export const getTSTypeFromProtoType = (type) => {
    switch (type) {
        case 'string':
            return t.tsStringKeyword();
        case 'int32':
        case 'uint32':
        case 'double':
            return t.tsNumberKeyword();
        case 'int64':
        case 'uint64':
            return t.tsTypeReference(t.identifier('Long'))
        case 'bytes':
            return t.tsTypeReference(t.identifier('Uint8Array'));
        case 'bool':
            return t.tsBooleanKeyword();
        default:
            throw new Error('getTSTypeFromProtoType() type not found');
    };
};


export interface ProtoType {
    oneofs?: { [key: string]: { oneof: string[], comment: string | undefined } },
    fields: {
        [key: string]: ProtoField;
    },
    comment: string | undefined;
}

export interface ProtoField {
    keyType?: string;
    rule?: string;
    type: string;
    id: number;
    options: {
        [key: string]: any;
        "(gogoproto.nullable)": boolean;
    }
    comment: string | undefined;
}


/*
  returns "Type | undefined"
*/
const optionalType = (type: t.TSType) => {
    return t.tsUnionType([
        type,
        t.tsUndefinedKeyword()
    ])
}

const getOneOfs = (type: ProtoType) => {
    const keys = Object.keys(type.oneofs ?? {});
    if (!keys.length) return [];
    if (keys.length !== 1) throw new Error('getOneOfs() oneofs cardinality not known!');
    return type.oneofs[keys[0]].oneof;
};

const getFieldOptionality = (field: ProtoField, isOneOf: boolean) => {
    return isOneOf || field?.options?.['(gogoproto.nullable)'];
};

const getProtoField = (field: ProtoField) => {
    let ast: any = null;
    let optional = false;

    if (field?.options?.['(gogoproto.nullable)']) {
        optional = true;
    }

    if (NATIVE_TYPES.includes(field.type)) {
        ast = getTSTypeFromProtoType(field.type);
    } else {
        ast = t.tsTypeReference(t.identifier(field.type));
    }

    if (field.rule === 'repeated') {
        ast = t.tsArrayType(ast);
    }


    if (field.keyType) {
        ast = t.tsUnionType([
            t.tsTypeLiteral([
                t.tsIndexSignature([
                    identifier('key',
                        t.tsTypeAnnotation(
                            getTSTypeFromProtoType(field.keyType)
                        )
                    )
                ],
                    t.tsTypeAnnotation(ast)
                )
            ])
        ]);
    }

    return ast;
}

export const createProtoType = (name: string, proto: ProtoType) => {
    const oneOfs = getOneOfs(proto);

    return t.exportNamedDeclaration(t.tsInterfaceDeclaration(
        t.identifier(name),
        null,
        [],
        t.tsInterfaceBody(
            Object.keys(proto.fields).map(fieldName => {
                const isOneOf = oneOfs.includes(fieldName);
                return tsPropertySignature(
                    t.identifier(fieldName),
                    t.tsTypeAnnotation(
                        getProtoField(proto.fields[fieldName])
                    ),
                    getFieldOptionality(proto.fields[fieldName], isOneOf)
                )
            })
        )
    ))
};