/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Ping = (function() {

    /**
     * Properties of a Ping.
     * @exports IPing
     * @interface IPing
     */

    /**
     * Constructs a new Ping.
     * @exports Ping
     * @classdesc Represents a Ping.
     * @implements IPing
     * @constructor
     * @param {IPing=} [properties] Properties to set
     */
    function Ping(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new Ping instance using the specified properties.
     * @function create
     * @memberof Ping
     * @static
     * @param {IPing=} [properties] Properties to set
     * @returns {Ping} Ping instance
     */
    Ping.create = function create(properties) {
        return new Ping(properties);
    };

    /**
     * Encodes the specified Ping message. Does not implicitly {@link Ping.verify|verify} messages.
     * @function encode
     * @memberof Ping
     * @static
     * @param {IPing} message Ping message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Ping.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified Ping message, length delimited. Does not implicitly {@link Ping.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Ping
     * @static
     * @param {IPing} message Ping message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Ping.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Ping message from the specified reader or buffer.
     * @function decode
     * @memberof Ping
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Ping} Ping
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Ping.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Ping();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Ping message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Ping
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Ping} Ping
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Ping.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Ping message.
     * @function verify
     * @memberof Ping
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Ping.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a Ping message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Ping
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Ping} Ping
     */
    Ping.fromObject = function fromObject(object) {
        if (object instanceof $root.Ping)
            return object;
        return new $root.Ping();
    };

    /**
     * Creates a plain object from a Ping message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Ping
     * @static
     * @param {Ping} message Ping
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Ping.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this Ping to JSON.
     * @function toJSON
     * @memberof Ping
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Ping.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Ping;
})();

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

$root.C_Login = (function() {

    /**
     * Properties of a C_Login.
     * @exports IC_Login
     * @interface IC_Login
     * @property {string|null} [userName] C_Login userName
     */

    /**
     * Constructs a new C_Login.
     * @exports C_Login
     * @classdesc Represents a C_Login.
     * @implements IC_Login
     * @constructor
     * @param {IC_Login=} [properties] Properties to set
     */
    function C_Login(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C_Login userName.
     * @member {string} userName
     * @memberof C_Login
     * @instance
     */
    C_Login.prototype.userName = "";

    /**
     * Creates a new C_Login instance using the specified properties.
     * @function create
     * @memberof C_Login
     * @static
     * @param {IC_Login=} [properties] Properties to set
     * @returns {C_Login} C_Login instance
     */
    C_Login.create = function create(properties) {
        return new C_Login(properties);
    };

    /**
     * Encodes the specified C_Login message. Does not implicitly {@link C_Login.verify|verify} messages.
     * @function encode
     * @memberof C_Login
     * @static
     * @param {IC_Login} message C_Login message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C_Login.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userName != null && message.hasOwnProperty("userName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userName);
        return writer;
    };

    /**
     * Encodes the specified C_Login message, length delimited. Does not implicitly {@link C_Login.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C_Login
     * @static
     * @param {IC_Login} message C_Login message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C_Login.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C_Login message from the specified reader or buffer.
     * @function decode
     * @memberof C_Login
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C_Login} C_Login
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C_Login.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C_Login();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.userName = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C_Login message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C_Login
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C_Login} C_Login
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C_Login.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C_Login message.
     * @function verify
     * @memberof C_Login
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C_Login.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userName != null && message.hasOwnProperty("userName"))
            if (!$util.isString(message.userName))
                return "userName: string expected";
        return null;
    };

    /**
     * Creates a C_Login message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C_Login
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C_Login} C_Login
     */
    C_Login.fromObject = function fromObject(object) {
        if (object instanceof $root.C_Login)
            return object;
        var message = new $root.C_Login();
        if (object.userName != null)
            message.userName = String(object.userName);
        return message;
    };

    /**
     * Creates a plain object from a C_Login message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C_Login
     * @static
     * @param {C_Login} message C_Login
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C_Login.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.userName = "";
        if (message.userName != null && message.hasOwnProperty("userName"))
            object.userName = message.userName;
        return object;
    };

    /**
     * Converts this C_Login to JSON.
     * @function toJSON
     * @memberof C_Login
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C_Login.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return C_Login;
})();

$root.S_Login = (function() {

    /**
     * Properties of a S_Login.
     * @exports IS_Login
     * @interface IS_Login
     * @property {number|null} [isSuc] S_Login isSuc
     */

    /**
     * Constructs a new S_Login.
     * @exports S_Login
     * @classdesc Represents a S_Login.
     * @implements IS_Login
     * @constructor
     * @param {IS_Login=} [properties] Properties to set
     */
    function S_Login(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S_Login isSuc.
     * @member {number} isSuc
     * @memberof S_Login
     * @instance
     */
    S_Login.prototype.isSuc = 0;

    /**
     * Creates a new S_Login instance using the specified properties.
     * @function create
     * @memberof S_Login
     * @static
     * @param {IS_Login=} [properties] Properties to set
     * @returns {S_Login} S_Login instance
     */
    S_Login.create = function create(properties) {
        return new S_Login(properties);
    };

    /**
     * Encodes the specified S_Login message. Does not implicitly {@link S_Login.verify|verify} messages.
     * @function encode
     * @memberof S_Login
     * @static
     * @param {IS_Login} message S_Login message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S_Login.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.isSuc != null && message.hasOwnProperty("isSuc"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.isSuc);
        return writer;
    };

    /**
     * Encodes the specified S_Login message, length delimited. Does not implicitly {@link S_Login.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S_Login
     * @static
     * @param {IS_Login} message S_Login message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S_Login.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S_Login message from the specified reader or buffer.
     * @function decode
     * @memberof S_Login
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S_Login} S_Login
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S_Login.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S_Login();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.isSuc = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S_Login message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S_Login
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S_Login} S_Login
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S_Login.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S_Login message.
     * @function verify
     * @memberof S_Login
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S_Login.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.isSuc != null && message.hasOwnProperty("isSuc"))
            if (!$util.isInteger(message.isSuc))
                return "isSuc: integer expected";
        return null;
    };

    /**
     * Creates a S_Login message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S_Login
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S_Login} S_Login
     */
    S_Login.fromObject = function fromObject(object) {
        if (object instanceof $root.S_Login)
            return object;
        var message = new $root.S_Login();
        if (object.isSuc != null)
            message.isSuc = object.isSuc | 0;
        return message;
    };

    /**
     * Creates a plain object from a S_Login message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S_Login
     * @static
     * @param {S_Login} message S_Login
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S_Login.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.isSuc = 0;
        if (message.isSuc != null && message.hasOwnProperty("isSuc"))
            object.isSuc = message.isSuc;
        return object;
    };

    /**
     * Converts this S_Login to JSON.
     * @function toJSON
     * @memberof S_Login
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S_Login.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S_Login;
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

/**
 * MesId enum.
 * @exports MesId
 * @enum {string}
 * @property {number} m_First=0 m_First value
 * @property {number} m_Ping=11 m_Ping value
 * @property {number} m_C_Login=12 m_C_Login value
 * @property {number} m_S_Login=13 m_S_Login value
 */
$root.MesId = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "m_First"] = 0;
    values[valuesById[11] = "m_Ping"] = 11;
    values[valuesById[12] = "m_C_Login"] = 12;
    values[valuesById[13] = "m_S_Login"] = 13;
    return values;
})();

$root.Msg = (function() {

    /**
     * Properties of a Msg.
     * @exports IMsg
     * @interface IMsg
     * @property {MesId|null} [mesId] Msg mesId
     * @property {IPing|null} [ping] Msg ping
     * @property {IC_Login|null} [cLogin] Msg cLogin
     * @property {IS_Login|null} [sLogin] Msg sLogin
     */

    /**
     * Constructs a new Msg.
     * @exports Msg
     * @classdesc Represents a Msg.
     * @implements IMsg
     * @constructor
     * @param {IMsg=} [properties] Properties to set
     */
    function Msg(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Msg mesId.
     * @member {MesId} mesId
     * @memberof Msg
     * @instance
     */
    Msg.prototype.mesId = 0;

    /**
     * Msg ping.
     * @member {IPing|null|undefined} ping
     * @memberof Msg
     * @instance
     */
    Msg.prototype.ping = null;

    /**
     * Msg cLogin.
     * @member {IC_Login|null|undefined} cLogin
     * @memberof Msg
     * @instance
     */
    Msg.prototype.cLogin = null;

    /**
     * Msg sLogin.
     * @member {IS_Login|null|undefined} sLogin
     * @memberof Msg
     * @instance
     */
    Msg.prototype.sLogin = null;

    /**
     * Creates a new Msg instance using the specified properties.
     * @function create
     * @memberof Msg
     * @static
     * @param {IMsg=} [properties] Properties to set
     * @returns {Msg} Msg instance
     */
    Msg.create = function create(properties) {
        return new Msg(properties);
    };

    /**
     * Encodes the specified Msg message. Does not implicitly {@link Msg.verify|verify} messages.
     * @function encode
     * @memberof Msg
     * @static
     * @param {IMsg} message Msg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Msg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mesId != null && message.hasOwnProperty("mesId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mesId);
        if (message.ping != null && message.hasOwnProperty("ping"))
            $root.Ping.encode(message.ping, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.cLogin != null && message.hasOwnProperty("cLogin"))
            $root.C_Login.encode(message.cLogin, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        if (message.sLogin != null && message.hasOwnProperty("sLogin"))
            $root.S_Login.encode(message.sLogin, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Msg message, length delimited. Does not implicitly {@link Msg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Msg
     * @static
     * @param {IMsg} message Msg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Msg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Msg message from the specified reader or buffer.
     * @function decode
     * @memberof Msg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Msg} Msg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Msg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mesId = reader.int32();
                break;
            case 11:
                message.ping = $root.Ping.decode(reader, reader.uint32());
                break;
            case 12:
                message.cLogin = $root.C_Login.decode(reader, reader.uint32());
                break;
            case 13:
                message.sLogin = $root.S_Login.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Msg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Msg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Msg} Msg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Msg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Msg message.
     * @function verify
     * @memberof Msg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Msg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mesId != null && message.hasOwnProperty("mesId"))
            switch (message.mesId) {
            default:
                return "mesId: enum value expected";
            case 0:
            case 11:
            case 12:
            case 13:
                break;
            }
        if (message.ping != null && message.hasOwnProperty("ping")) {
            var error = $root.Ping.verify(message.ping);
            if (error)
                return "ping." + error;
        }
        if (message.cLogin != null && message.hasOwnProperty("cLogin")) {
            var error = $root.C_Login.verify(message.cLogin);
            if (error)
                return "cLogin." + error;
        }
        if (message.sLogin != null && message.hasOwnProperty("sLogin")) {
            var error = $root.S_Login.verify(message.sLogin);
            if (error)
                return "sLogin." + error;
        }
        return null;
    };

    /**
     * Creates a Msg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Msg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Msg} Msg
     */
    Msg.fromObject = function fromObject(object) {
        if (object instanceof $root.Msg)
            return object;
        var message = new $root.Msg();
        switch (object.mesId) {
        case "m_First":
        case 0:
            message.mesId = 0;
            break;
        case "m_Ping":
        case 11:
            message.mesId = 11;
            break;
        case "m_C_Login":
        case 12:
            message.mesId = 12;
            break;
        case "m_S_Login":
        case 13:
            message.mesId = 13;
            break;
        }
        if (object.ping != null) {
            if (typeof object.ping !== "object")
                throw TypeError(".Msg.ping: object expected");
            message.ping = $root.Ping.fromObject(object.ping);
        }
        if (object.cLogin != null) {
            if (typeof object.cLogin !== "object")
                throw TypeError(".Msg.cLogin: object expected");
            message.cLogin = $root.C_Login.fromObject(object.cLogin);
        }
        if (object.sLogin != null) {
            if (typeof object.sLogin !== "object")
                throw TypeError(".Msg.sLogin: object expected");
            message.sLogin = $root.S_Login.fromObject(object.sLogin);
        }
        return message;
    };

    /**
     * Creates a plain object from a Msg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Msg
     * @static
     * @param {Msg} message Msg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Msg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mesId = options.enums === String ? "m_First" : 0;
            object.ping = null;
            object.cLogin = null;
            object.sLogin = null;
        }
        if (message.mesId != null && message.hasOwnProperty("mesId"))
            object.mesId = options.enums === String ? $root.MesId[message.mesId] : message.mesId;
        if (message.ping != null && message.hasOwnProperty("ping"))
            object.ping = $root.Ping.toObject(message.ping, options);
        if (message.cLogin != null && message.hasOwnProperty("cLogin"))
            object.cLogin = $root.C_Login.toObject(message.cLogin, options);
        if (message.sLogin != null && message.hasOwnProperty("sLogin"))
            object.sLogin = $root.S_Login.toObject(message.sLogin, options);
        return object;
    };

    /**
     * Converts this Msg to JSON.
     * @function toJSON
     * @memberof Msg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Msg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Msg;
})();

module.exports = $root;
