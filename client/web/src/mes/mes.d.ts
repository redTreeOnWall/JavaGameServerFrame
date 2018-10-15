import * as $protobuf from "protobufjs";
/** Properties of a Ping. */
export interface IPing {
}

/** Represents a Ping. */
export class Ping implements IPing {

    /**
     * Constructs a new Ping.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPing);

    /**
     * Creates a new Ping instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Ping instance
     */
    public static create(properties?: IPing): Ping;

    /**
     * Encodes the specified Ping message. Does not implicitly {@link Ping.verify|verify} messages.
     * @param message Ping message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Ping message, length delimited. Does not implicitly {@link Ping.verify|verify} messages.
     * @param message Ping message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Ping message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Ping
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ping;

    /**
     * Decodes a Ping message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Ping
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ping;

    /**
     * Verifies a Ping message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Ping message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Ping
     */
    public static fromObject(object: { [k: string]: any }): Ping;

    /**
     * Creates a plain object from a Ping message. Also converts values to other types if specified.
     * @param message Ping
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Ping, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Ping to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TestMes. */
export interface ITestMes {

    /** TestMes mes */
    mes?: (string|null);

    /** TestMes mesId */
    mesId?: (number|null);
}

/** Represents a TestMes. */
export class TestMes implements ITestMes {

    /**
     * Constructs a new TestMes.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITestMes);

    /** TestMes mes. */
    public mes: string;

    /** TestMes mesId. */
    public mesId: number;

    /**
     * Creates a new TestMes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TestMes instance
     */
    public static create(properties?: ITestMes): TestMes;

    /**
     * Encodes the specified TestMes message. Does not implicitly {@link TestMes.verify|verify} messages.
     * @param message TestMes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITestMes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TestMes message, length delimited. Does not implicitly {@link TestMes.verify|verify} messages.
     * @param message TestMes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITestMes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TestMes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TestMes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TestMes;

    /**
     * Decodes a TestMes message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TestMes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TestMes;

    /**
     * Verifies a TestMes message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TestMes message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TestMes
     */
    public static fromObject(object: { [k: string]: any }): TestMes;

    /**
     * Creates a plain object from a TestMes message. Also converts values to other types if specified.
     * @param message TestMes
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TestMes, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TestMes to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a C_Login. */
export interface IC_Login {

    /** C_Login userName */
    userName?: (string|null);
}

/** Represents a C_Login. */
export class C_Login implements IC_Login {

    /**
     * Constructs a new C_Login.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC_Login);

    /** C_Login userName. */
    public userName: string;

    /**
     * Creates a new C_Login instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C_Login instance
     */
    public static create(properties?: IC_Login): C_Login;

    /**
     * Encodes the specified C_Login message. Does not implicitly {@link C_Login.verify|verify} messages.
     * @param message C_Login message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC_Login, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C_Login message, length delimited. Does not implicitly {@link C_Login.verify|verify} messages.
     * @param message C_Login message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC_Login, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C_Login message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C_Login
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C_Login;

    /**
     * Decodes a C_Login message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C_Login
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C_Login;

    /**
     * Verifies a C_Login message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C_Login message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C_Login
     */
    public static fromObject(object: { [k: string]: any }): C_Login;

    /**
     * Creates a plain object from a C_Login message. Also converts values to other types if specified.
     * @param message C_Login
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C_Login, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C_Login to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a S_Login. */
export interface IS_Login {

    /** S_Login isSuc */
    isSuc?: (number|null);
}

/** Represents a S_Login. */
export class S_Login implements IS_Login {

    /**
     * Constructs a new S_Login.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS_Login);

    /** S_Login isSuc. */
    public isSuc: number;

    /**
     * Creates a new S_Login instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S_Login instance
     */
    public static create(properties?: IS_Login): S_Login;

    /**
     * Encodes the specified S_Login message. Does not implicitly {@link S_Login.verify|verify} messages.
     * @param message S_Login message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS_Login, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S_Login message, length delimited. Does not implicitly {@link S_Login.verify|verify} messages.
     * @param message S_Login message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS_Login, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S_Login message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S_Login
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S_Login;

    /**
     * Decodes a S_Login message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S_Login
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S_Login;

    /**
     * Verifies a S_Login message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S_Login message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S_Login
     */
    public static fromObject(object: { [k: string]: any }): S_Login;

    /**
     * Creates a plain object from a S_Login message. Also converts values to other types if specified.
     * @param message S_Login
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S_Login, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S_Login to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CubeRotation. */
export interface ICubeRotation {

    /** CubeRotation vector3 */
    vector3?: (IVector3|null);
}

/** Represents a CubeRotation. */
export class CubeRotation implements ICubeRotation {

    /**
     * Constructs a new CubeRotation.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICubeRotation);

    /** CubeRotation vector3. */
    public vector3?: (IVector3|null);

    /**
     * Creates a new CubeRotation instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CubeRotation instance
     */
    public static create(properties?: ICubeRotation): CubeRotation;

    /**
     * Encodes the specified CubeRotation message. Does not implicitly {@link CubeRotation.verify|verify} messages.
     * @param message CubeRotation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICubeRotation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CubeRotation message, length delimited. Does not implicitly {@link CubeRotation.verify|verify} messages.
     * @param message CubeRotation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICubeRotation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CubeRotation message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CubeRotation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CubeRotation;

    /**
     * Decodes a CubeRotation message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CubeRotation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CubeRotation;

    /**
     * Verifies a CubeRotation message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CubeRotation message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CubeRotation
     */
    public static fromObject(object: { [k: string]: any }): CubeRotation;

    /**
     * Creates a plain object from a CubeRotation message. Also converts values to other types if specified.
     * @param message CubeRotation
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CubeRotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CubeRotation to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Vector3. */
export interface IVector3 {

    /** Vector3 x */
    x?: (number|null);

    /** Vector3 y */
    y?: (number|null);

    /** Vector3 z */
    z?: (number|null);
}

/** Represents a Vector3. */
export class Vector3 implements IVector3 {

    /**
     * Constructs a new Vector3.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVector3);

    /** Vector3 x. */
    public x: number;

    /** Vector3 y. */
    public y: number;

    /** Vector3 z. */
    public z: number;

    /**
     * Creates a new Vector3 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Vector3 instance
     */
    public static create(properties?: IVector3): Vector3;

    /**
     * Encodes the specified Vector3 message. Does not implicitly {@link Vector3.verify|verify} messages.
     * @param message Vector3 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVector3, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Vector3 message, length delimited. Does not implicitly {@link Vector3.verify|verify} messages.
     * @param message Vector3 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVector3, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Vector3 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Vector3
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Vector3;

    /**
     * Decodes a Vector3 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Vector3
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Vector3;

    /**
     * Verifies a Vector3 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Vector3 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Vector3
     */
    public static fromObject(object: { [k: string]: any }): Vector3;

    /**
     * Creates a plain object from a Vector3 message. Also converts values to other types if specified.
     * @param message Vector3
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Vector3, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Vector3 to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** MesId enum. */
export enum MesId {
    m_First = 0,
    m_Ping = 11,
    m_C_Login = 12,
    m_S_Login = 13
}

/** Properties of a Msg. */
export interface IMsg {

    /** Msg mesId */
    mesId?: (MesId|null);

    /** Msg ping */
    ping?: (IPing|null);

    /** Msg cLogin */
    cLogin?: (IC_Login|null);

    /** Msg sLogin */
    sLogin?: (IS_Login|null);
}

/** Represents a Msg. */
export class Msg implements IMsg {

    /**
     * Constructs a new Msg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMsg);

    /** Msg mesId. */
    public mesId: MesId;

    /** Msg ping. */
    public ping?: (IPing|null);

    /** Msg cLogin. */
    public cLogin?: (IC_Login|null);

    /** Msg sLogin. */
    public sLogin?: (IS_Login|null);

    /**
     * Creates a new Msg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Msg instance
     */
    public static create(properties?: IMsg): Msg;

    /**
     * Encodes the specified Msg message. Does not implicitly {@link Msg.verify|verify} messages.
     * @param message Msg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Msg message, length delimited. Does not implicitly {@link Msg.verify|verify} messages.
     * @param message Msg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Msg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Msg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg;

    /**
     * Decodes a Msg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Msg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg;

    /**
     * Verifies a Msg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Msg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Msg
     */
    public static fromObject(object: { [k: string]: any }): Msg;

    /**
     * Creates a plain object from a Msg message. Also converts values to other types if specified.
     * @param message Msg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Msg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Msg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
