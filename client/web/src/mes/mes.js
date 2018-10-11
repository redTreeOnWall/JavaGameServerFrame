/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.TestMes = (function() {

    /**
     * Properties of a TestMes.
     * @exports ITestMes
     * @interface ITestMes
     * @property {string|null} [mes] TestMes mes
     * @property {number|null} [mesId] TestMes mesId
     */

    /**
     * Constructs a new TestMes.
     * @exports TestMes
     * @classdesc Represents a TestMes.
     * @implements ITestMes
     * @constructor
     * @param {ITestMes=} [properties] Properties to set
     */
    function TestMes(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TestMes mes.
     * @member {string} mes
     * @memberof TestMes
     * @instance
     */
    TestMes.prototype.mes = "";

    /**
     * TestMes mesId.
     * @member {number} mesId
     * @memberof TestMes
     * @instance
     */
    TestMes.prototype.mesId = 0;

    /**
     * Creates a new TestMes instance using the specified properties.
     * @function create
     * @memberof TestMes
     * @static
     * @param {ITestMes=} [properties] Properties to set
     * @returns {TestMes} TestMes instance
     */
    TestMes.create = function create(properties) {
        return new TestMes(properties);
    };

    /**
     * Encodes the specified TestMes message. Does not implicitly {@link TestMes.verify|verify} messages.
     * @function encode
     * @memberof TestMes
     * @static
     * @param {ITestMes} message TestMes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TestMes.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mes != null && message.hasOwnProperty("mes"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.mes);
        if (message.mesId != null && message.hasOwnProperty("mesId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.mesId);
        return writer;
    };

    /**
     * Encodes the specified TestMes message, length delimited. Does not implicitly {@link TestMes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TestMes
     * @static
     * @param {ITestMes} message TestMes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TestMes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TestMes message from the specified reader or buffer.
     * @function decode
     * @memberof TestMes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TestMes} TestMes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TestMes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TestMes();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mes = reader.string();
                break;
            case 2:
                message.mesId = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TestMes message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TestMes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TestMes} TestMes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TestMes.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TestMes message.
     * @function verify
     * @memberof TestMes
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TestMes.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mes != null && message.hasOwnProperty("mes"))
            if (!$util.isString(message.mes))
                return "mes: string expected";
        if (message.mesId != null && message.hasOwnProperty("mesId"))
            if (!$util.isInteger(message.mesId))
                return "mesId: integer expected";
        return null;
    };

    /**
     * Creates a TestMes message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TestMes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TestMes} TestMes
     */
    TestMes.fromObject = function fromObject(object) {
        if (object instanceof $root.TestMes)
            return object;
        var message = new $root.TestMes();
        if (object.mes != null)
            message.mes = String(object.mes);
        if (object.mesId != null)
            message.mesId = object.mesId | 0;
        return message;
    };

    /**
     * Creates a plain object from a TestMes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TestMes
     * @static
     * @param {TestMes} message TestMes
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TestMes.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mes = "";
            object.mesId = 0;
        }
        if (message.mes != null && message.hasOwnProperty("mes"))
            object.mes = message.mes;
        if (message.mesId != null && message.hasOwnProperty("mesId"))
            object.mesId = message.mesId;
        return object;
    };

    /**
     * Converts this TestMes to JSON.
     * @function toJSON
     * @memberof TestMes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TestMes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TestMes;
})();

$root.CubeRotation = (function() {

    /**
     * Properties of a CubeRotation.
     * @exports ICubeRotation
     * @interface ICubeRotation
     * @property {IVector3|null} [vector3] CubeRotation vector3
     */

    /**
     * Constructs a new CubeRotation.
     * @exports CubeRotation
     * @classdesc Represents a CubeRotation.
     * @implements ICubeRotation
     * @constructor
     * @param {ICubeRotation=} [properties] Properties to set
     */
    function CubeRotation(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CubeRotation vector3.
     * @member {IVector3|null|undefined} vector3
     * @memberof CubeRotation
     * @instance
     */
    CubeRotation.prototype.vector3 = null;

    /**
     * Creates a new CubeRotation instance using the specified properties.
     * @function create
     * @memberof CubeRotation
     * @static
     * @param {ICubeRotation=} [properties] Properties to set
     * @returns {CubeRotation} CubeRotation instance
     */
    CubeRotation.create = function create(properties) {
        return new CubeRotation(properties);
    };

    /**
     * Encodes the specified CubeRotation message. Does not implicitly {@link CubeRotation.verify|verify} messages.
     * @function encode
     * @memberof CubeRotation
     * @static
     * @param {ICubeRotation} message CubeRotation message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CubeRotation.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.vector3 != null && message.hasOwnProperty("vector3"))
            $root.Vector3.encode(message.vector3, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified CubeRotation message, length delimited. Does not implicitly {@link CubeRotation.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CubeRotation
     * @static
     * @param {ICubeRotation} message CubeRotation message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CubeRotation.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CubeRotation message from the specified reader or buffer.
     * @function decode
     * @memberof CubeRotation
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CubeRotation} CubeRotation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CubeRotation.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CubeRotation();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.vector3 = $root.Vector3.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CubeRotation message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CubeRotation
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CubeRotation} CubeRotation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CubeRotation.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CubeRotation message.
     * @function verify
     * @memberof CubeRotation
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CubeRotation.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.vector3 != null && message.hasOwnProperty("vector3")) {
            var error = $root.Vector3.verify(message.vector3);
            if (error)
                return "vector3." + error;
        }
        return null;
    };

    /**
     * Creates a CubeRotation message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CubeRotation
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CubeRotation} CubeRotation
     */
    CubeRotation.fromObject = function fromObject(object) {
        if (object instanceof $root.CubeRotation)
            return object;
        var message = new $root.CubeRotation();
        if (object.vector3 != null) {
            if (typeof object.vector3 !== "object")
                throw TypeError(".CubeRotation.vector3: object expected");
            message.vector3 = $root.Vector3.fromObject(object.vector3);
        }
        return message;
    };

    /**
     * Creates a plain object from a CubeRotation message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CubeRotation
     * @static
     * @param {CubeRotation} message CubeRotation
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CubeRotation.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.vector3 = null;
        if (message.vector3 != null && message.hasOwnProperty("vector3"))
            object.vector3 = $root.Vector3.toObject(message.vector3, options);
        return object;
    };

    /**
     * Converts this CubeRotation to JSON.
     * @function toJSON
     * @memberof CubeRotation
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CubeRotation.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CubeRotation;
})();

$root.Vector3 = (function() {

    /**
     * Properties of a Vector3.
     * @exports IVector3
     * @interface IVector3
     * @property {number|null} [x] Vector3 x
     * @property {number|null} [y] Vector3 y
     * @property {number|null} [z] Vector3 z
     */

    /**
     * Constructs a new Vector3.
     * @exports Vector3
     * @classdesc Represents a Vector3.
     * @implements IVector3
     * @constructor
     * @param {IVector3=} [properties] Properties to set
     */
    function Vector3(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Vector3 x.
     * @member {number} x
     * @memberof Vector3
     * @instance
     */
    Vector3.prototype.x = 0;

    /**
     * Vector3 y.
     * @member {number} y
     * @memberof Vector3
     * @instance
     */
    Vector3.prototype.y = 0;

    /**
     * Vector3 z.
     * @member {number} z
     * @memberof Vector3
     * @instance
     */
    Vector3.prototype.z = 0;

    /**
     * Creates a new Vector3 instance using the specified properties.
     * @function create
     * @memberof Vector3
     * @static
     * @param {IVector3=} [properties] Properties to set
     * @returns {Vector3} Vector3 instance
     */
    Vector3.create = function create(properties) {
        return new Vector3(properties);
    };

    /**
     * Encodes the specified Vector3 message. Does not implicitly {@link Vector3.verify|verify} messages.
     * @function encode
     * @memberof Vector3
     * @static
     * @param {IVector3} message Vector3 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Vector3.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.x != null && message.hasOwnProperty("x"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
        if (message.y != null && message.hasOwnProperty("y"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
        if (message.z != null && message.hasOwnProperty("z"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.z);
        return writer;
    };

    /**
     * Encodes the specified Vector3 message, length delimited. Does not implicitly {@link Vector3.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Vector3
     * @static
     * @param {IVector3} message Vector3 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Vector3.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Vector3 message from the specified reader or buffer.
     * @function decode
     * @memberof Vector3
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Vector3} Vector3
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Vector3.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Vector3();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.x = reader.float();
                break;
            case 2:
                message.y = reader.float();
                break;
            case 3:
                message.z = reader.float();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Vector3 message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Vector3
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Vector3} Vector3
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Vector3.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Vector3 message.
     * @function verify
     * @memberof Vector3
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Vector3.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.x != null && message.hasOwnProperty("x"))
            if (typeof message.x !== "number")
                return "x: number expected";
        if (message.y != null && message.hasOwnProperty("y"))
            if (typeof message.y !== "number")
                return "y: number expected";
        if (message.z != null && message.hasOwnProperty("z"))
            if (typeof message.z !== "number")
                return "z: number expected";
        return null;
    };

    /**
     * Creates a Vector3 message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Vector3
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Vector3} Vector3
     */
    Vector3.fromObject = function fromObject(object) {
        if (object instanceof $root.Vector3)
            return object;
        var message = new $root.Vector3();
        if (object.x != null)
            message.x = Number(object.x);
        if (object.y != null)
            message.y = Number(object.y);
        if (object.z != null)
            message.z = Number(object.z);
        return message;
    };

    /**
     * Creates a plain object from a Vector3 message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Vector3
     * @static
     * @param {Vector3} message Vector3
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Vector3.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.x = 0;
            object.y = 0;
            object.z = 0;
        }
        if (message.x != null && message.hasOwnProperty("x"))
            object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
        if (message.y != null && message.hasOwnProperty("y"))
            object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
        if (message.z != null && message.hasOwnProperty("z"))
            object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
        return object;
    };

    /**
     * Converts this Vector3 to JSON.
     * @function toJSON
     * @memberof Vector3
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Vector3.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Vector3;
})();

module.exports = $root;
