import * as $protobuf from "protobufjs";
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
