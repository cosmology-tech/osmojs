import * as t from '@babel/types';
import { camel, pascal } from 'case';
import { identifier, tsEnumMember, tsPropertySignature, functionDeclaration, objectMethod } from '../utils';

import { ProtoType } from './types';

const protoEncodeMethod = (name: string, proto: ProtoType) => {
    return objectMethod(
        'method',
        t.identifier('encode'),
        [
            // args

            identifier('message', t.tsTypeAnnotation(
                t.tsTypeReference(
                    t.identifier('MsgJoinPool')
                )
            ), false),

            t.assignmentPattern(
                t.identifier('writer'),
                t.callExpression(
                    t.memberExpression(
                        t.memberExpression(
                            t.identifier('_m0'),
                            t.identifier('Writer')
                        ),
                        t.identifier('create')
                    ),
                    [

                    ]
                )
            )
        ],

        // body 
        t.blockStatement([

            /*
                if (message.sender !== "") {
                    writer.uint32(10).string(message.sender);
                }
            */
            t.ifStatement(
                t.binaryExpression('!==',
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier('sender')
                    ),
                    t.stringLiteral('')
                ),
                t.blockStatement([
                    t.expressionStatement(
                        t.callExpression(
                            t.memberExpression(
                                t.callExpression(
                                    t.memberExpression(
                                        t.identifier('writer'),
                                        t.identifier('uint32')
                                    ),
                                    [
                                        t.numericLiteral(10)
                                    ]
                                ),
                                t.identifier('string')
                            ),
                            [
                                t.memberExpression(
                                    t.identifier('message'),
                                    t.identifier('sender')
                                )
                            ]
                        )
                    )
                ])
            ),
            /*
            if (!message.poolId.isZero()) {
                writer.uint32(16).uint64(message.poolId);
            }
            */
            t.ifStatement(
                t.unaryExpression('!',
                    t.callExpression(
                        t.memberExpression(
                            t.memberExpression(
                                t.identifier('message'),
                                t.identifier('poolId')
                            ),
                            t.identifier('isZero')
                        ),
                        []
                    )
                ),
                t.blockStatement([
                    t.expressionStatement(
                        t.callExpression(
                            t.memberExpression(
                                t.callExpression(
                                    t.memberExpression(
                                        t.identifier('writer'),
                                        t.identifier('uint32')
                                    ),
                                    [
                                        t.numericLiteral(16)
                                    ]
                                ),
                                t.identifier('uint64')
                            ),
                            [
                                t.memberExpression(
                                    t.identifier('message'),
                                    t.identifier('poolId')
                                )
                            ]
                        )
                    )
                ])
            ),


            /*

        if (message.queryData.length !== 0) {
          writer.uint32(18).bytes(message.queryData);
        }
        
            */

            t.ifStatement(
                t.binaryExpression(
                    '!==',
                    t.memberExpression(
                        t.memberExpression(
                            t.identifier('message'),
                            t.identifier('queryData')
                        ),
                        t.identifier('length')
                    ),
                    t.numericLiteral(0)
                ),
                t.blockStatement([
                    t.expressionStatement(
                        t.callExpression(
                            t.memberExpression(
                                t.callExpression(
                                    t.memberExpression(
                                        t.identifier('writer'),
                                        t.identifier('uint32')
                                    ),
                                    [
                                        t.numericLiteral(18)
                                    ]
                                ),
                                t.identifier('bytes')
                            ),
                            [
                                t.memberExpression(
                                    t.identifier('message'),
                                    t.identifier('queryData')
                                )
                            ]
                        )
                    )
                ])
            ),

            /*

                ARRAY!
                
                Long[]

                 writer.uint32(10).fork();

                for (const v of message.codeIds) {
                    writer.uint64(v);
                }

                writer.ldelim();


            */

            t.expressionStatement(
                t.callExpression(
                    t.memberExpression(
                        t.callExpression(
                            t.memberExpression(
                                t.identifier('writer'),
                                t.identifier('uint32')
                            ),
                            [
                                t.numericLiteral(10)
                            ]
                        ),
                        t.identifier('fork')
                    ),
                    []
                )
            ),
            t.forOfStatement(
                t.variableDeclaration(
                    'const',
                    [
                        t.variableDeclarator(
                            t.identifier('v'),
                            null
                        )
                    ]
                ),
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier('codeIds')
                ),
                t.blockStatement([
                    t.expressionStatement(
                        t.callExpression(
                            t.memberExpression(
                                t.identifier('writer'),
                                t.identifier('uint64')
                            ),
                            [
                                t.identifier('v')
                            ]
                        )
                    )
                ])
            ),
            t.expressionStatement(
                t.callExpression(
                    t.memberExpression(
                        t.identifier('writer'),
                        t.identifier('ldelim')
                    ),
                    []
                )
            ),


            /*
                LOOP (ARRAY)
            */

            t.forOfStatement(
                t.variableDeclaration('const',
                    [
                        t.variableDeclarator(
                            t.identifier('v'),
                            null
                        )
                    ]
                ),
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier('tokenInMaxs')
                ),
                t.blockStatement(
                    [
                        t.expressionStatement(
                            t.callExpression(
                                t.memberExpression(
                                    t.callExpression(
                                        t.memberExpression(
                                            t.identifier('Coin'),
                                            t.identifier('encode')
                                        ),
                                        [
                                            // "v!" just means it's NOT NULLABLE
                                            t.tsNonNullExpression(
                                                t.identifier('v')
                                            ),
                                            t.callExpression(
                                                t.memberExpression(
                                                    t.callExpression(
                                                        t.memberExpression(
                                                            t.identifier('writer'),
                                                            t.identifier('uint32')
                                                        ),
                                                        [
                                                            t.numericLiteral(34)
                                                        ]
                                                    ),
                                                    t.identifier('fork')
                                                ),
                                                []
                                            )
                                        ]
                                    ),
                                    t.identifier('ldelim')
                                ),
                                []
                            )
                        )
                    ]
                )
            ),

            /* RETURN writer */

            t.returnStatement(
                t.identifier('writer')
            )

        ]),
        false,
        false,
        false,
        // return type
        t.tsTypeAnnotation(
            t.tsTypeReference(
                t.tsQualifiedName(
                    t.identifier('_m0'),
                    t.identifier('Writer')
                )
            )
        )
    )
};

const protoDecodeMethod = (name: string, proto: ProtoType) => {
    return objectMethod(
        'method',
        t.identifier('decode'),
        [
            identifier('input',
                t.tsTypeAnnotation(
                    t.tsUnionType(
                        [
                            t.tsTypeReference(
                                t.tsQualifiedName(
                                    t.identifier('_m0'),
                                    t.identifier('Reader')
                                ),
                                null
                            ),
                            t.tsTypeReference(
                                t.identifier('Uint8Array')
                            )
                        ]
                    )
                ),
                false
            )
        ],
        t.blockStatement([

            /*
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
            */
            t.variableDeclaration(
                'const',
                [
                    t.variableDeclarator(
                        t.identifier('reader'),
                        t.conditionalExpression(
                            t.binaryExpression(
                                'instanceof',
                                t.identifier('input'),
                                t.memberExpression(
                                    t.identifier('_m0'),
                                    t.identifier('Reader')
                                )
                            ),
                            t.identifier('input'),
                            t.newExpression(
                                t.memberExpression(
                                    t.identifier('_m0'),
                                    t.identifier('Reader')
                                ),
                                [
                                    t.identifier('input')
                                ]
                            )
                        )
                    )
                ]
            ),

            /*
    let end = length === undefined ? reader.len : reader.pos + length;
            */

            t.variableDeclaration(
                'let',
                [
                    t.variableDeclarator(
                        t.identifier('end'),
                        t.conditionalExpression(
                            t.binaryExpression('===',
                                t.identifier('length'),
                                t.identifier('undefined')
                            ),
                            t.memberExpression(
                                t.identifier('reader'),
                                t.identifier('len')
                            ),
                            t.binaryExpression(
                                '+',
                                t.memberExpression(
                                    t.identifier('reader'),
                                    t.identifier('pos')
                                ),
                                t.identifier('length')
                            )
                        )
                    )
                ]
            ),

            /*
            
    const message = createBaseMsgJoinPool();

            */

            t.variableDeclaration(
                'const',
                [
                    t.variableDeclarator(
                        t.identifier('message'),
                        t.callExpression(
                            t.identifier('createBaseMsgJoinPool'),
                            []
                        )
                    )
                ]
            ),

            ///////////
            ///////////
            ///////////

            t.whileStatement(
                t.binaryExpression(
                    '<',
                    t.memberExpression(
                        t.identifier('reader'),
                        t.identifier('pos')
                    ),
                    t.identifier('end')
                ),
                t.blockStatement([

                    /// DECODE BODY
                    t.variableDeclaration(
                        'const',
                        [
                            t.variableDeclarator(
                                t.identifier('tag'),
                                t.callExpression(
                                    t.memberExpression(
                                        t.identifier('reader'),
                                        t.identifier('uint32')
                                    ),
                                    []
                                )
                            )
                        ]
                    ),


                    t.switchStatement(
                        t.binaryExpression(
                            '>>>',
                            t.identifier('tag'),
                            t.numericLiteral(3)
                        ),
                        [


                            /*
                   message.sender = reader.string();
                      break;
                            */


                            t.switchCase(
                                t.numericLiteral(1),
                                [
                                    t.expressionStatement(
                                        t.assignmentExpression(
                                            '=',
                                            t.memberExpression(
                                                t.identifier('message'),
                                                t.identifier('sender')
                                            ),
                                            t.callExpression(
                                                t.memberExpression(
                                                    t.identifier('reader'),
                                                    t.identifier('string')
                                                ),
                                                []
                                            )
                                        )
                                    ),
                                    t.breakStatement()
                                ]
                            ),

                            /*
                               case 2:
                                          message.poolId = (reader.uint64() as Long);
                                          break;
                            */

                            t.switchCase(
                                t.numericLiteral(2),
                                [
                                    t.expressionStatement(
                                        t.assignmentExpression(
                                            '=',
                                            t.memberExpression(
                                                t.identifier('message'),
                                                t.identifier('poolId')
                                            ),
                                            t.tsAsExpression(
                                                t.callExpression(
                                                    t.memberExpression(
                                                        t.identifier('reader'),
                                                        t.identifier('uint64')
                                                    ),
                                                    []
                                                ),
                                                t.tsTypeReference(
                                                    t.identifier('Long')
                                                )
                                            )
                                        )
                                    ),
                                    t.breakStatement()
                                ]
                            ),

                            /*
                               case Long[]:

              if ((tag & 7) === 2) {
                const end2 = reader.uint32() + reader.pos;

                while (reader.pos < end2) {
                  message.codeIds.push((reader.uint64() as Long));
                }
              } else {
                message.codeIds.push((reader.uint64() as Long));
              }

                               */

                            t.switchCase(
                                t.numericLiteral(2),
                                [
                                    t.ifStatement(
                                        t.binaryExpression(
                                            '===',
                                            t.binaryExpression(
                                                '&',
                                                t.identifier('tag'),
                                                t.numericLiteral(7)
                                            ),
                                            t.numericLiteral(2)
                                        ),
                                        t.blockStatement([
                                            t.variableDeclaration('const', [
                                                t.variableDeclarator(
                                                    t.identifier('end2'),
                                                    t.binaryExpression(
                                                        '+',
                                                        t.callExpression(
                                                            t.memberExpression(
                                                                t.identifier('reader'),
                                                                t.identifier('uint32')
                                                            ),
                                                            []
                                                        ),
                                                        t.memberExpression(
                                                            t.identifier('reader'),
                                                            t.identifier('pos')
                                                        )
                                                    )
                                                )
                                            ]),
                                            // while loop

                                            t.whileStatement(
                                                t.binaryExpression(
                                                    '<',
                                                    t.memberExpression(
                                                        t.identifier('reader'),
                                                        t.identifier('pos')
                                                    ),
                                                    t.identifier('end2')
                                                ),
                                                t.blockStatement([
                                                    t.expressionStatement(
                                                        t.callExpression(
                                                            t.memberExpression(
                                                                t.memberExpression(
                                                                    t.identifier('message'),
                                                                    t.identifier('codeIds')
                                                                ),
                                                                t.identifier('push')
                                                            ),
                                                            [
                                                                t.tsAsExpression(
                                                                    t.callExpression(
                                                                        t.memberExpression(
                                                                            t.identifier('reader'),
                                                                            t.identifier('uint64')
                                                                        ),
                                                                        []
                                                                    ),
                                                                    t.tsTypeReference(
                                                                        t.identifier('Long')
                                                                    )
                                                                )
                                                            ]
                                                        )
                                                    )
                                                ])
                                            )

                                        ]),
                                        t.blockStatement([
                                            t.expressionStatement(
                                                t.callExpression(
                                                    t.memberExpression(
                                                        t.memberExpression(
                                                            t.identifier('message'),
                                                            t.identifier('codeIds')
                                                        ),
                                                        t.identifier('push')
                                                    ),
                                                    [
                                                        t.tsAsExpression(
                                                            t.callExpression(
                                                                t.memberExpression(
                                                                    t.identifier('reader'),
                                                                    t.identifier('uint64')
                                                                ),
                                                                []
                                                            ),
                                                            t.tsTypeReference(
                                                                t.identifier('Long')
                                                            )
                                                        )
                                                    ]
                                                )
                                            )
                                        ])
                                    )
                                ]
                            ),


                            /*
                             case 3:
                                          message.shareOutAmount = reader.string();
                                          break
                            */

                            t.switchCase(
                                t.numericLiteral(3),
                                [
                                    t.expressionStatement(
                                        t.assignmentExpression(
                                            '=',
                                            t.memberExpression(
                                                t.identifier('message'),
                                                t.identifier('shareOutAmount')
                                            ),
                                            t.callExpression(
                                                t.memberExpression(
                                                    t.identifier('reader'),
                                                    t.identifier('string')
                                                ),
                                                []
                                            )
                                        )
                                    ),
                                    t.breakStatement()
                                ]
                            ),

                            /*
                             case:
                                 message.queryData = reader.bytes();
                           */

                            t.switchCase(
                                t.numericLiteral(333),
                                [
                                    t.expressionStatement(
                                        t.assignmentExpression(
                                            '=',
                                            t.memberExpression(
                                                t.identifier('message'),
                                                t.identifier('queryData')
                                            ),
                                            t.callExpression(
                                                t.memberExpression(
                                                    t.identifier('reader'),
                                                    t.identifier('bytes')
                                                ),
                                                []
                                            )
                                        )
                                    ),
                                    t.breakStatement()
                                ]
                            ),

                            /*
                             case 4:
                                          message.tokenInMaxs.push(Coin.decode(reader, reader.uint32()));
                                          break;
                            */

                            t.switchCase(
                                t.numericLiteral(4),
                                [
                                    t.expressionStatement(
                                        t.callExpression(
                                            t.memberExpression(
                                                t.memberExpression(
                                                    t.identifier('message'),
                                                    t.identifier('tokenInMaxs')
                                                ),
                                                t.identifier('push')
                                            ),
                                            [
                                                t.callExpression(
                                                    t.memberExpression(
                                                        t.identifier('Coin'),
                                                        t.identifier('decode')
                                                    ),
                                                    [
                                                        t.identifier('reader'),
                                                        t.callExpression(
                                                            t.memberExpression(
                                                                t.identifier('reader'),
                                                                t.identifier('uint32')
                                                            ),
                                                            []
                                                        )
                                                    ]
                                                )
                                            ]
                                        )
                                    ),
                                    t.breakStatement()
                                ]
                            ),

                            /*
                            default:
                                    reader.skipType(tag & 7);
                                    break;
                            */

                            t.switchCase(
                                null,
                                [
                                    t.expressionStatement(
                                        t.callExpression(
                                            t.memberExpression(
                                                t.identifier('reader'),
                                                t.identifier('skipType')
                                            ),
                                            [
                                                t.binaryExpression(
                                                    '&',
                                                    t.identifier('tag'),
                                                    t.numericLiteral(7)
                                                )
                                            ]
                                        )
                                    ),
                                    t.breakStatement()
                                ]
                            )
                        ]
                    )

                ])
            ),

            // RETURN STATEMENT

            t.returnStatement(
                t.identifier('message')
            )

        ]),
        false,
        false,
        false,
        t.tsTypeAnnotation(
            t.tsTypeReference(
                t.identifier('MsgJoinPool')
            )
        )
    )
};

export const protoFromJSONMethod = (name: string, proto: ProtoType) => {
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
                    t.objectExpression([

                        /*

                        sender: isSet(object.sender) ? String(object.sender) : ""

                        */
                        t.objectProperty(
                            t.identifier('sender'),
                            t.conditionalExpression(
                                t.callExpression(
                                    t.identifier('isSet'),
                                    [
                                        t.memberExpression(
                                            t.identifier('object'),
                                            t.identifier('sender')
                                        )
                                    ]
                                ),
                                t.callExpression(
                                    t.identifier('String'),
                                    [
                                        t.memberExpression(
                                            t.identifier('object'),
                                            t.identifier('sender')
                                        )
                                    ]
                                ),
                                t.stringLiteral('')
                            )
                        ),

                        /*

                        poolId: isSet(object.poolId) ? Long.fromString(object.poolId) : Long.UZERO

                        */

                        t.objectProperty(
                            t.identifier('poolId'),
                            t.conditionalExpression(
                                t.callExpression(
                                    t.identifier('isSet'),
                                    [
                                        t.memberExpression(
                                            t.identifier('object'),
                                            t.identifier('poolId')
                                        )
                                    ]
                                ),
                                t.callExpression(
                                    t.memberExpression(
                                        t.identifier('Long'),
                                        t.identifier('fromString')
                                    ),
                                    [
                                        t.memberExpression(
                                            t.identifier('object'),
                                            t.identifier('poolId')
                                        )
                                    ]
                                ),
                                t.memberExpression(
                                    t.identifier('Long'),
                                    t.identifier('UZERO')
                                )
                            )
                        ),

                        /*

            queryData: isSet(object.queryData) ? bytesFromBase64(object.queryData) : new Uint8Array()
                        
                        */

                        // TODO register import!
                        // bytesFromBase64

                        t.objectProperty(
                            t.identifier('queryData'),
                            t.conditionalExpression(
                                t.callExpression(
                                    t.identifier('isSet'),
                                    [
                                        t.memberExpression(
                                            t.identifier('object'),
                                            t.identifier('queryData')
                                        )
                                    ]
                                ),
                                t.callExpression(
                                    t.identifier('bytesFromBase64'),
                                    [
                                        t.memberExpression(
                                            t.identifier('object'),
                                            t.identifier('queryData')
                                        )
                                    ]
                                ),
                                t.newExpression(
                                    t.identifier('Uint8Array'),
                                    []
                                )
                            )
                        ),

                        /*

                        Long[]

codeIds: Array.isArray(object?.codeIds) ? object.codeIds.map((e: any) => Long.fromString(e)) : [],

                        */


                        t.objectProperty(
                            t.identifier('codeIds'),
                            t.conditionalExpression(
                                t.callExpression(
                                    t.memberExpression(
                                        t.identifier('Array'),
                                        t.identifier('isArray')
                                    ),
                                    [
                                        t.optionalMemberExpression(
                                            t.identifier('object'),
                                            t.identifier('codeIds'),
                                            false,
                                            true
                                        )
                                    ]
                                ),
                                t.callExpression(
                                    t.memberExpression(
                                        t.memberExpression(
                                            t.identifier('object'),
                                            t.identifier('codeIds')
                                        ),
                                        t.identifier('map')
                                    ),
                                    [
                                        t.arrowFunctionExpression(
                                            [
                                                identifier('e', t.tsTypeAnnotation(
                                                    t.tsAnyKeyword()
                                                ))
                                            ],
                                            t.callExpression(
                                                t.memberExpression(
                                                    t.identifier('Long'),
                                                    t.identifier('fromString')
                                                ),
                                                [
                                                    t.identifier('e')
                                                ]
                                            ),
                                            false
                                        )
                                    ]
                                ),
                                t.arrayExpression([])
                            )
                        ),



                        /*
        
                        tokenInMaxs: Array.isArray(object?.tokenInMaxs) ? object.tokenInMaxs.map((e: any) => Coin.fromJSON(e)) : []

                        */

                        t.objectProperty(
                            t.identifier('tokenInMaxs'),
                            t.conditionalExpression(
                                t.callExpression(
                                    t.memberExpression(
                                        t.identifier('Array'),
                                        t.identifier('isArray')
                                    ),
                                    [
                                        t.optionalMemberExpression(
                                            t.identifier('object'),
                                            t.identifier('tokenInMaxs'),
                                            false,
                                            true
                                        )
                                    ]
                                ),
                                t.callExpression(
                                    t.memberExpression(
                                        t.memberExpression(
                                            t.identifier('object'),
                                            t.identifier('tokenInMaxs')
                                        ),
                                        t.identifier('map')
                                    ),
                                    [
                                        t.arrowFunctionExpression(
                                            [
                                                identifier('e',
                                                    t.tsTypeAnnotation(
                                                        t.tsAnyKeyword()
                                                    )
                                                )
                                            ],
                                            t.callExpression(
                                                t.memberExpression(
                                                    t.identifier('Coin'),
                                                    t.identifier('fromJSON')
                                                ),
                                                [
                                                    t.identifier('e')
                                                ]
                                            )
                                        )
                                    ]
                                ),
                                t.arrayExpression([])
                            )
                        )
                    ])
                )
            ]
        ),
        false,
        false,
        false,
        t.tsTypeAnnotation(
            t.tsTypeReference(
                t.identifier('MsgJoinPool')
            )
        )
    )
};

export const protoToJSONMethod = (name: string, proto: ProtoType) => {
    return objectMethod('method',
        t.identifier('toJSON'),
        [
            identifier(
                'message',
                t.tsTypeAnnotation(
                    t.tsTypeReference(
                        t.identifier('MsgJoinPool')
                    )
                )
            )
        ],
        t.blockStatement([
            t.variableDeclaration(
                'const',
                [
                    t.variableDeclarator(
                        identifier('obj', t.tsTypeAnnotation(t.tsAnyKeyword())),
                        t.objectExpression([])
                    )
                ]
            ),

            /*
                message.sender !== undefined && (obj.sender = message.sender);
            */

            t.expressionStatement(
                t.logicalExpression(
                    '&&',
                    t.binaryExpression(
                        '!==',
                        t.memberExpression(
                            t.identifier('message'),
                            t.identifier('sender')
                        ),
                        t.identifier('undefined')
                    ),
                    t.assignmentExpression(
                        '=',
                        t.memberExpression(
                            t.identifier('obj'),
                            t.identifier('sender')
                        ),
                        t.memberExpression(
                            t.identifier('message'),
                            t.identifier('sender')
                        )
                    )
                )
            ),

            /*
    
            message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());

            */

            t.expressionStatement(
                t.logicalExpression(
                    '&&',
                    t.binaryExpression(
                        '!==',
                        t.memberExpression(
                            t.identifier('message'),
                            t.identifier('poolId')
                        ),
                        t.identifier('undefined')
                    ),
                    t.assignmentExpression(
                        '=',
                        t.memberExpression(
                            t.identifier('obj'),
                            t.identifier('poolId'),
                            false,
                            false
                        ),
                        t.callExpression(
                            t.memberExpression(
                                t.logicalExpression(
                                    '||',
                                    t.memberExpression(
                                        t.identifier('message'),
                                        t.identifier('poolId')
                                    ),
                                    t.memberExpression(
                                        t.identifier('Long'),
                                        t.identifier('UZERO')
                                    )
                                ),
                                t.identifier('toString')
                            ),
                            []
                        )
                    )
                )
            ),

            /*
                Long[]
            */

            t.ifStatement(
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier('codeIds')
                ),
                t.blockStatement([
                    t.expressionStatement(
                        t.assignmentExpression(
                            '=',
                            t.memberExpression(
                                t.identifier('obj'),
                                t.identifier('codeIds')
                            ),
                            t.callExpression(
                                t.memberExpression(
                                    t.memberExpression(
                                        t.identifier('message'),
                                        t.identifier('codeIds')
                                    ),
                                    t.identifier('map')
                                ),
                                [
                                    t.arrowFunctionExpression(
                                        [
                                            t.identifier('e')
                                        ],
                                        t.callExpression(
                                            t.memberExpression(
                                                t.logicalExpression(
                                                    '||',
                                                    t.identifier('e'),
                                                    t.memberExpression(
                                                        t.identifier('Long'),
                                                        t.identifier('UZERO')
                                                    )
                                                ),
                                                t.identifier('toString')
                                            ),
                                            []
                                        )
                                    )
                                ]
                            )
                        )
                    )
                ]),
                t.blockStatement([
                    t.expressionStatement(
                        t.assignmentExpression(
                            '=',
                            t.memberExpression(
                                t.identifier('obj'),
                                t.identifier('codeIds')
                            ),
                            t.arrayExpression([])
                        )
                    )
                ])
            ),



            /*
    
             message.queryData !== undefined && (obj.queryData = base64FromBytes(message.queryData !== undefined ? message.queryData : new Uint8Array()));

            */

            t.expressionStatement(
                t.logicalExpression(
                    '&&',
                    t.binaryExpression(
                        '!==',
                        t.memberExpression(
                            t.identifier('message'),
                            t.identifier('queryData')
                        ),
                        t.identifier('undefined')
                    ),
                    t.assignmentExpression(
                        '=',
                        t.memberExpression(
                            t.identifier('obj'),
                            t.identifier('queryData'),
                            false,
                            false
                        ),
                        t.callExpression(
                            t.identifier('base64FromBytes'),
                            [
                                t.conditionalExpression(
                                    t.binaryExpression(
                                        '!==',
                                        t.memberExpression(
                                            t.identifier('message'),
                                            t.identifier('queryData')
                                        ),
                                        t.identifier('undefined')
                                    ),
                                    t.memberExpression(
                                        t.identifier('message'),
                                        t.identifier('queryData')
                                    ),
                                    t.newExpression(t.identifier('Uint8Array'), []))
                            ]
                        )
                    )
                )
            ),



            /*

            if (message.tokenInMaxs) {
                obj.tokenInMaxs = message.tokenInMaxs.map(e => e ? Coin.toJSON(e) : undefined);
            } else {
                obj.tokenInMaxs = [];
            }

            */

            t.ifStatement(
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier('tokenInMaxs')
                ),
                t.blockStatement([
                    t.expressionStatement(
                        t.assignmentExpression(
                            '=',
                            t.memberExpression(
                                t.identifier('obj'),
                                t.identifier('tokenInMaxs')
                            ),
                            t.callExpression(
                                t.memberExpression(
                                    t.memberExpression(
                                        t.identifier('message'),
                                        t.identifier('tokenInMaxs')
                                    ),
                                    t.identifier('map')
                                ),
                                [
                                    t.arrowFunctionExpression(
                                        [
                                            t.identifier('e')
                                        ],
                                        t.conditionalExpression(
                                            t.identifier('e'),
                                            t.callExpression(
                                                t.memberExpression(
                                                    t.identifier('Coin'),
                                                    t.identifier('toJSON')
                                                ),
                                                [
                                                    t.identifier('e')
                                                ]
                                            ),
                                            t.identifier('undefined')
                                        )
                                    )
                                ]
                            )
                        )
                    )
                ]),
                t.blockStatement([
                    t.expressionStatement(
                        t.assignmentExpression(
                            '=',
                            t.memberExpression(
                                t.identifier('obj'),
                                t.identifier('tokenInMaxs'),
                                false,
                                false
                            ),
                            t.arrayExpression([])
                        )
                    )
                ])
            ),

            // RETURN 

            t.returnStatement(t.identifier('obj'))

        ]),
        false,
        false,
        false,
        t.tsTypeAnnotation(
            t.tsUnknownKeyword()
        )
    );
};

export const protoFromPartialMethod = (name: string, proto: ProtoType) => {
    return objectMethod(
        'method',
        t.identifier('fromPartial'),
        [
            identifier(
                'object',
                t.tsTypeAnnotation(
                    t.tsTypeReference(
                        t.identifier('I')
                    )
                )
            )
        ],
        t.blockStatement([


            // init 

            t.variableDeclaration(
                'const',
                [
                    t.variableDeclarator(
                        t.identifier('message'),
                        t.callExpression(
                            t.identifier('createBaseMsgJoinPool'),
                            []
                        )
                    )
                ]
            ),

            /*
                message.sender = object.sender ?? "";
            */

            t.expressionStatement(
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier('sender')
                    ),
                    t.logicalExpression(
                        '??',
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier('sender')
                        ),
                        t.stringLiteral('')
                    )
                )
            ),

            /*
                message.queryData = object.queryData ?? new Uint8Array()
            */

            t.expressionStatement(
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier('queryData')
                    ),
                    t.logicalExpression(
                        '??',
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier('queryData')
                        ),
                        t.newExpression(
                            t.identifier('Uint8Array'),
                            []
                        )
                    )
                )
            ),

            /*
            Long[]
            */

            t.expressionStatement(
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier('codeIds')
                    ),
                    t.logicalExpression(
                        '||',
                        t.optionalCallExpression(
                            t.optionalMemberExpression(
                                t.memberExpression(
                                    t.identifier('object'),
                                    t.identifier('codeIds')
                                ),
                                t.identifier('map'),
                                false,
                                true
                            ),
                            [
                                t.arrowFunctionExpression(
                                    [
                                        t.identifier('e')
                                    ],
                                    t.callExpression(
                                        t.memberExpression(
                                            t.identifier('Long'),
                                            t.identifier('fromValue')
                                        ),
                                        [
                                            t.identifier('e')
                                        ]
                                    )
                                )
                            ],
                            false
                        ),
                        t.arrayExpression([])
                    )
                )
            ),

            /*
                message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
            */

            t.expressionStatement(
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier('poolId')
                    ),
                    t.conditionalExpression(
                        t.logicalExpression(
                            '&&',
                            t.binaryExpression(
                                '!==',
                                t.memberExpression(
                                    t.identifier('object'),
                                    t.identifier('poolId')
                                ),
                                t.identifier('undefined')
                            ),
                            t.binaryExpression(
                                '!==',
                                t.memberExpression(
                                    t.identifier('object'),
                                    t.identifier('poolId')
                                ),
                                t.nullLiteral()
                            )
                        ),
                        t.callExpression(
                            t.memberExpression(
                                t.identifier('Long'),
                                t.identifier('fromValue')
                            ),
                            [
                                t.memberExpression(
                                    t.identifier('object'),
                                    t.identifier('poolId')
                                )
                            ]
                        ),
                        t.memberExpression(
                            t.identifier('Long'),
                            t.identifier('UZERO')
                        )
                    )
                )
            ),

            /*
                message.tokenInMaxs = object.tokenInMaxs?.map(e => Coin.fromPartial(e)) || [];
            */

            t.expressionStatement(
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier('tokenInMaxs')
                    ),
                    t.logicalExpression(
                        '||',
                        t.optionalCallExpression(
                            t.optionalMemberExpression(
                                t.memberExpression(
                                    t.identifier('object'),
                                    t.identifier('tokenInMaxs')
                                ),
                                t.identifier('map'),
                                false,
                                true
                            ),
                            [
                                t.arrowFunctionExpression(
                                    [
                                        t.identifier('e')
                                    ],
                                    t.callExpression(
                                        t.memberExpression(
                                            t.identifier('Coin'),
                                            t.identifier('fromPartial')
                                        ),
                                        [
                                            t.identifier('e')
                                        ]
                                    )
                                )
                            ],
                            false
                        ),
                        t.arrayExpression([])
                    )
                )
            ),

            // RETURN 

            t.returnStatement(
                t.identifier('message')
            )

        ]),
        false,
        false,
        false,
        t.tsTypeAnnotation(
            t.tsTypeReference(
                t.identifier('MsgJoinPool')
            )
        ),
        t.tsTypeParameterDeclaration([
            t.tsTypeParameter(
                t.tsTypeReference(
                    t.identifier('Exact'),
                    t.tsTypeParameterInstantiation([
                        t.tsTypeReference(
                            t.identifier('DeepPartial'),
                            t.tsTypeParameterInstantiation([
                                t.tsTypeReference(
                                    t.identifier('MsgJoinPool')
                                )
                            ])
                        ),
                        t.tsTypeReference(
                            t.identifier('I')
                        )
                    ])
                ),
                null,
                'I'
            )
        ])
    )
};

export const createProtoObjectWithMethods = (name: string, proto: ProtoType) => {
    return t.exportNamedDeclaration(
        t.variableDeclaration('const',
            [t.variableDeclarator(
                t.identifier('MsgJoinPool'),
                t.objectExpression(
                    [
                        protoEncodeMethod(name, proto),
                        protoDecodeMethod(name, proto),
                        protoFromJSONMethod(name, proto),
                        protoToJSONMethod(name, proto),
                        protoFromPartialMethod(name, proto),
                    ]
                )
            )]
        )
    )
};