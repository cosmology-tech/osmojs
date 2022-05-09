import * as t from '@babel/types';
import { identifier, objectMethod } from '../../../utils';
import { ProtoParseContext } from '../../context';
import { ProtoType, ProtoField, getFieldsTypeName } from '../types';
import { fromJSON, arrayTypes } from './utils';

const needsImplementation = (name: string, field: ProtoField) => {
    throw new Error(`need to implement fromJSON (${field.type} rules[${field.rule}] name[${name}])`);
}
export interface FromJSONMethod {
    context: ProtoParseContext;
    field: ProtoField;
}

export const fromJSONMethodFields = (context: ProtoParseContext, name: string, proto: ProtoType) => {
    const fields = Object.keys(proto.fields ?? {}).map(fieldName => {
        const field = {
            name: fieldName,
            ...proto.fields[fieldName]
        };

        const args: FromJSONMethod = {
            context,
            field
        };

        if (field.rule === 'repeated') {
            switch (field.type) {
                case 'string':
                    return fromJSON.array(args, arrayTypes.string());
                case 'bytes':
                    return fromJSON.array(args, arrayTypes.bytes(args));
                case 'bool':
                    return fromJSON.array(args, arrayTypes.bool());
                case 'float':
                    return fromJSON.array(args, arrayTypes.float());
                case 'double':
                    return fromJSON.array(args, arrayTypes.double());
                case 'int32':
                    return fromJSON.array(args, arrayTypes.int32());
                case 'uint32':
                    return fromJSON.array(args, arrayTypes.uint32());
                case 'int64':
                    return fromJSON.array(args, arrayTypes.int64());
                case 'uint64':
                    return fromJSON.array(args, arrayTypes.uint64());
                default:
                    switch (field.parsedType.type) {
                        case 'Enum':
                            return fromJSON.array(args, arrayTypes.enum(args));
                        case 'Type':
                            return fromJSON.array(args, arrayTypes.type(args));
                    }
                    return needsImplementation(fieldName, field);
            }
        }

        if (field.keyType) {
            switch (field.keyType) {
                case 'string':
                case 'int64':
                case 'uint64':
                case 'int32':
                case 'uint32':
                    return fromJSON.keyHash(args);
                default:
                    return needsImplementation(fieldName, field);
            }
        }

        switch (field.type) {
            case 'string':
                return fromJSON.string(args);
            case 'bytes':
                return fromJSON.bytes(args);
            case 'bool':
                return fromJSON.bool(args);
            case 'double':
                return fromJSON.double(args);
            case 'float':
                return fromJSON.float(args);
            case 'int32':
                return fromJSON.int32(args);
            case 'uint32':
                return fromJSON.uint32(args);
            case 'int64':
                return fromJSON.int64(args);
            case 'uint64':
                return fromJSON.uint64(args);
            case 'Duration':
            case 'google.protobuf.Duration':
                return fromJSON.duration(args);
            case 'Timestamp':
            case 'google.protobuf.Timestamp':
                return fromJSON.timestamp(args);
            default:
                switch (field.parsedType.type) {
                    case 'Enum':
                        return fromJSON.enum(args);
                    case 'Type':
                        return fromJSON.type(args);
                }
                return needsImplementation(fieldName, field);
        }
    });
    return fields;
};

export const fromJSONMethod = (context: ProtoParseContext, name: string, proto: ProtoType) => {
    return objectMethod('method',
        t.identifier('fromJSON'),
        [
            identifier('object',
                t.tsTypeAnnotation(
                    t.tsAnyKeyword()
                ),
                false
            )

        ],
        t.blockStatement(
            [
                t.returnStatement(
                    t.objectExpression(fromJSONMethodFields(context, name, proto))
                )
            ]
        ),
        false,
        false,
        false,
        t.tsTypeAnnotation(
            t.tsTypeReference(
                t.identifier(name)
            )
        )
    )
};
