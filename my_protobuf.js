/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.common = (function() {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    var common = {};

    common.SubscribeRequest = (function() {

        /**
         * Properties of a SubscribeRequest.
         * @memberof common
         * @interface ISubscribeRequest
         * @property {number|Long|null} [intervalMin] SubscribeRequest intervalMin
         * @property {number|Long|null} [intervalMax] SubscribeRequest intervalMax
         */

        /**
         * Constructs a new SubscribeRequest.
         * @memberof common
         * @classdesc Represents a SubscribeRequest.
         * @implements ISubscribeRequest
         * @constructor
         * @param {common.ISubscribeRequest=} [properties] Properties to set
         */
        function SubscribeRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SubscribeRequest intervalMin.
         * @member {number|Long} intervalMin
         * @memberof common.SubscribeRequest
         * @instance
         */
        SubscribeRequest.prototype.intervalMin = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * SubscribeRequest intervalMax.
         * @member {number|Long} intervalMax
         * @memberof common.SubscribeRequest
         * @instance
         */
        SubscribeRequest.prototype.intervalMax = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new SubscribeRequest instance using the specified properties.
         * @function create
         * @memberof common.SubscribeRequest
         * @static
         * @param {common.ISubscribeRequest=} [properties] Properties to set
         * @returns {common.SubscribeRequest} SubscribeRequest instance
         */
        SubscribeRequest.create = function create(properties) {
            return new SubscribeRequest(properties);
        };

        /**
         * Encodes the specified SubscribeRequest message. Does not implicitly {@link common.SubscribeRequest.verify|verify} messages.
         * @function encode
         * @memberof common.SubscribeRequest
         * @static
         * @param {common.ISubscribeRequest} message SubscribeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubscribeRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.intervalMin != null && Object.hasOwnProperty.call(message, "intervalMin"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint64(message.intervalMin);
            if (message.intervalMax != null && Object.hasOwnProperty.call(message, "intervalMax"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint64(message.intervalMax);
            return writer;
        };

        /**
         * Encodes the specified SubscribeRequest message, length delimited. Does not implicitly {@link common.SubscribeRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.SubscribeRequest
         * @static
         * @param {common.ISubscribeRequest} message SubscribeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubscribeRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SubscribeRequest message from the specified reader or buffer.
         * @function decode
         * @memberof common.SubscribeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.SubscribeRequest} SubscribeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubscribeRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.SubscribeRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 11: {
                        message.intervalMin = reader.uint64();
                        break;
                    }
                case 12: {
                        message.intervalMax = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SubscribeRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.SubscribeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.SubscribeRequest} SubscribeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubscribeRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SubscribeRequest message.
         * @function verify
         * @memberof common.SubscribeRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SubscribeRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.intervalMin != null && message.hasOwnProperty("intervalMin"))
                if (!$util.isInteger(message.intervalMin) && !(message.intervalMin && $util.isInteger(message.intervalMin.low) && $util.isInteger(message.intervalMin.high)))
                    return "intervalMin: integer|Long expected";
            if (message.intervalMax != null && message.hasOwnProperty("intervalMax"))
                if (!$util.isInteger(message.intervalMax) && !(message.intervalMax && $util.isInteger(message.intervalMax.low) && $util.isInteger(message.intervalMax.high)))
                    return "intervalMax: integer|Long expected";
            return null;
        };

        /**
         * Creates a SubscribeRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.SubscribeRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.SubscribeRequest} SubscribeRequest
         */
        SubscribeRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.common.SubscribeRequest)
                return object;
            var message = new $root.common.SubscribeRequest();
            if (object.intervalMin != null)
                if ($util.Long)
                    (message.intervalMin = $util.Long.fromValue(object.intervalMin)).unsigned = true;
                else if (typeof object.intervalMin === "string")
                    message.intervalMin = parseInt(object.intervalMin, 10);
                else if (typeof object.intervalMin === "number")
                    message.intervalMin = object.intervalMin;
                else if (typeof object.intervalMin === "object")
                    message.intervalMin = new $util.LongBits(object.intervalMin.low >>> 0, object.intervalMin.high >>> 0).toNumber(true);
            if (object.intervalMax != null)
                if ($util.Long)
                    (message.intervalMax = $util.Long.fromValue(object.intervalMax)).unsigned = true;
                else if (typeof object.intervalMax === "string")
                    message.intervalMax = parseInt(object.intervalMax, 10);
                else if (typeof object.intervalMax === "number")
                    message.intervalMax = object.intervalMax;
                else if (typeof object.intervalMax === "object")
                    message.intervalMax = new $util.LongBits(object.intervalMax.low >>> 0, object.intervalMax.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a SubscribeRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.SubscribeRequest
         * @static
         * @param {common.SubscribeRequest} message SubscribeRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SubscribeRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.intervalMin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.intervalMin = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.intervalMax = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.intervalMax = options.longs === String ? "0" : 0;
            }
            if (message.intervalMin != null && message.hasOwnProperty("intervalMin"))
                if (typeof message.intervalMin === "number")
                    object.intervalMin = options.longs === String ? String(message.intervalMin) : message.intervalMin;
                else
                    object.intervalMin = options.longs === String ? $util.Long.prototype.toString.call(message.intervalMin) : options.longs === Number ? new $util.LongBits(message.intervalMin.low >>> 0, message.intervalMin.high >>> 0).toNumber(true) : message.intervalMin;
            if (message.intervalMax != null && message.hasOwnProperty("intervalMax"))
                if (typeof message.intervalMax === "number")
                    object.intervalMax = options.longs === String ? String(message.intervalMax) : message.intervalMax;
                else
                    object.intervalMax = options.longs === String ? $util.Long.prototype.toString.call(message.intervalMax) : options.longs === Number ? new $util.LongBits(message.intervalMax.low >>> 0, message.intervalMax.high >>> 0).toNumber(true) : message.intervalMax;
            return object;
        };

        /**
         * Converts this SubscribeRequest to JSON.
         * @function toJSON
         * @memberof common.SubscribeRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SubscribeRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SubscribeRequest
         * @function getTypeUrl
         * @memberof common.SubscribeRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SubscribeRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.SubscribeRequest";
        };

        return SubscribeRequest;
    })();

    return common;
})();

$root.user = (function() {

    /**
     * Namespace user.
     * @exports user
     * @namespace
     */
    var user = {};

    user.Authorization = (function() {

        /**
         * Properties of an Authorization.
         * @memberof user
         * @interface IAuthorization
         * @property {string|null} [jwt] Authorization jwt
         */

        /**
         * Constructs a new Authorization.
         * @memberof user
         * @classdesc Represents an Authorization.
         * @implements IAuthorization
         * @constructor
         * @param {user.IAuthorization=} [properties] Properties to set
         */
        function Authorization(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Authorization jwt.
         * @member {string} jwt
         * @memberof user.Authorization
         * @instance
         */
        Authorization.prototype.jwt = "";

        /**
         * Creates a new Authorization instance using the specified properties.
         * @function create
         * @memberof user.Authorization
         * @static
         * @param {user.IAuthorization=} [properties] Properties to set
         * @returns {user.Authorization} Authorization instance
         */
        Authorization.create = function create(properties) {
            return new Authorization(properties);
        };

        /**
         * Encodes the specified Authorization message. Does not implicitly {@link user.Authorization.verify|verify} messages.
         * @function encode
         * @memberof user.Authorization
         * @static
         * @param {user.IAuthorization} message Authorization message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Authorization.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.jwt != null && Object.hasOwnProperty.call(message, "jwt"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.jwt);
            return writer;
        };

        /**
         * Encodes the specified Authorization message, length delimited. Does not implicitly {@link user.Authorization.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.Authorization
         * @static
         * @param {user.IAuthorization} message Authorization message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Authorization.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Authorization message from the specified reader or buffer.
         * @function decode
         * @memberof user.Authorization
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.Authorization} Authorization
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Authorization.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.Authorization();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.jwt = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Authorization message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.Authorization
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.Authorization} Authorization
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Authorization.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Authorization message.
         * @function verify
         * @memberof user.Authorization
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Authorization.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.jwt != null && message.hasOwnProperty("jwt"))
                if (!$util.isString(message.jwt))
                    return "jwt: string expected";
            return null;
        };

        /**
         * Creates an Authorization message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.Authorization
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.Authorization} Authorization
         */
        Authorization.fromObject = function fromObject(object) {
            if (object instanceof $root.user.Authorization)
                return object;
            var message = new $root.user.Authorization();
            if (object.jwt != null)
                message.jwt = String(object.jwt);
            return message;
        };

        /**
         * Creates a plain object from an Authorization message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.Authorization
         * @static
         * @param {user.Authorization} message Authorization
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Authorization.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.jwt = "";
            if (message.jwt != null && message.hasOwnProperty("jwt"))
                object.jwt = message.jwt;
            return object;
        };

        /**
         * Converts this Authorization to JSON.
         * @function toJSON
         * @memberof user.Authorization
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Authorization.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Authorization
         * @function getTypeUrl
         * @memberof user.Authorization
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Authorization.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/user.Authorization";
        };

        return Authorization;
    })();

    user.LoginRequest = (function() {

        /**
         * Properties of a LoginRequest.
         * @memberof user
         * @interface ILoginRequest
         * @property {number|Long|null} [timestamp] LoginRequest timestamp
         * @property {string|null} [uname] LoginRequest uname
         * @property {string|null} [passwd] LoginRequest passwd
         * @property {string|null} [deviceId] LoginRequest deviceId
         * @property {string|null} [deviceName] LoginRequest deviceName
         * @property {number|null} [expire] LoginRequest expire
         */

        /**
         * Constructs a new LoginRequest.
         * @memberof user
         * @classdesc Represents a LoginRequest.
         * @implements ILoginRequest
         * @constructor
         * @param {user.ILoginRequest=} [properties] Properties to set
         */
        function LoginRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRequest timestamp.
         * @member {number|Long} timestamp
         * @memberof user.LoginRequest
         * @instance
         */
        LoginRequest.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LoginRequest uname.
         * @member {string} uname
         * @memberof user.LoginRequest
         * @instance
         */
        LoginRequest.prototype.uname = "";

        /**
         * LoginRequest passwd.
         * @member {string} passwd
         * @memberof user.LoginRequest
         * @instance
         */
        LoginRequest.prototype.passwd = "";

        /**
         * LoginRequest deviceId.
         * @member {string} deviceId
         * @memberof user.LoginRequest
         * @instance
         */
        LoginRequest.prototype.deviceId = "";

        /**
         * LoginRequest deviceName.
         * @member {string} deviceName
         * @memberof user.LoginRequest
         * @instance
         */
        LoginRequest.prototype.deviceName = "";

        /**
         * LoginRequest expire.
         * @member {number} expire
         * @memberof user.LoginRequest
         * @instance
         */
        LoginRequest.prototype.expire = 0;

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @function create
         * @memberof user.LoginRequest
         * @static
         * @param {user.ILoginRequest=} [properties] Properties to set
         * @returns {user.LoginRequest} LoginRequest instance
         */
        LoginRequest.create = function create(properties) {
            return new LoginRequest(properties);
        };

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link user.LoginRequest.verify|verify} messages.
         * @function encode
         * @memberof user.LoginRequest
         * @static
         * @param {user.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.timestamp);
            if (message.uname != null && Object.hasOwnProperty.call(message, "uname"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.uname);
            if (message.passwd != null && Object.hasOwnProperty.call(message, "passwd"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.passwd);
            if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                writer.uint32(/* id 21, wireType 2 =*/170).string(message.deviceId);
            if (message.deviceName != null && Object.hasOwnProperty.call(message, "deviceName"))
                writer.uint32(/* id 22, wireType 2 =*/178).string(message.deviceName);
            if (message.expire != null && Object.hasOwnProperty.call(message, "expire"))
                writer.uint32(/* id 51, wireType 0 =*/408).int32(message.expire);
            return writer;
        };

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link user.LoginRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.LoginRequest
         * @static
         * @param {user.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @function decode
         * @memberof user.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.LoginRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.timestamp = reader.int64();
                        break;
                    }
                case 11: {
                        message.uname = reader.string();
                        break;
                    }
                case 12: {
                        message.passwd = reader.string();
                        break;
                    }
                case 21: {
                        message.deviceId = reader.string();
                        break;
                    }
                case 22: {
                        message.deviceName = reader.string();
                        break;
                    }
                case 51: {
                        message.expire = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRequest message.
         * @function verify
         * @memberof user.LoginRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.uname != null && message.hasOwnProperty("uname"))
                if (!$util.isString(message.uname))
                    return "uname: string expected";
            if (message.passwd != null && message.hasOwnProperty("passwd"))
                if (!$util.isString(message.passwd))
                    return "passwd: string expected";
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (!$util.isString(message.deviceId))
                    return "deviceId: string expected";
            if (message.deviceName != null && message.hasOwnProperty("deviceName"))
                if (!$util.isString(message.deviceName))
                    return "deviceName: string expected";
            if (message.expire != null && message.hasOwnProperty("expire"))
                if (!$util.isInteger(message.expire))
                    return "expire: integer expected";
            return null;
        };

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.LoginRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.LoginRequest} LoginRequest
         */
        LoginRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.user.LoginRequest)
                return object;
            var message = new $root.user.LoginRequest();
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.uname != null)
                message.uname = String(object.uname);
            if (object.passwd != null)
                message.passwd = String(object.passwd);
            if (object.deviceId != null)
                message.deviceId = String(object.deviceId);
            if (object.deviceName != null)
                message.deviceName = String(object.deviceName);
            if (object.expire != null)
                message.expire = object.expire | 0;
            return message;
        };

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.LoginRequest
         * @static
         * @param {user.LoginRequest} message LoginRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                object.uname = "";
                object.passwd = "";
                object.deviceId = "";
                object.deviceName = "";
                object.expire = 0;
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.uname != null && message.hasOwnProperty("uname"))
                object.uname = message.uname;
            if (message.passwd != null && message.hasOwnProperty("passwd"))
                object.passwd = message.passwd;
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                object.deviceId = message.deviceId;
            if (message.deviceName != null && message.hasOwnProperty("deviceName"))
                object.deviceName = message.deviceName;
            if (message.expire != null && message.hasOwnProperty("expire"))
                object.expire = message.expire;
            return object;
        };

        /**
         * Converts this LoginRequest to JSON.
         * @function toJSON
         * @memberof user.LoginRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LoginRequest
         * @function getTypeUrl
         * @memberof user.LoginRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/user.LoginRequest";
        };

        return LoginRequest;
    })();

    user.WxLoginRequest = (function() {

        /**
         * Properties of a WxLoginRequest.
         * @memberof user
         * @interface IWxLoginRequest
         * @property {string|null} [code] WxLoginRequest code
         * @property {string|null} [deviceId] WxLoginRequest deviceId
         * @property {string|null} [deviceName] WxLoginRequest deviceName
         */

        /**
         * Constructs a new WxLoginRequest.
         * @memberof user
         * @classdesc Represents a WxLoginRequest.
         * @implements IWxLoginRequest
         * @constructor
         * @param {user.IWxLoginRequest=} [properties] Properties to set
         */
        function WxLoginRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WxLoginRequest code.
         * @member {string} code
         * @memberof user.WxLoginRequest
         * @instance
         */
        WxLoginRequest.prototype.code = "";

        /**
         * WxLoginRequest deviceId.
         * @member {string} deviceId
         * @memberof user.WxLoginRequest
         * @instance
         */
        WxLoginRequest.prototype.deviceId = "";

        /**
         * WxLoginRequest deviceName.
         * @member {string} deviceName
         * @memberof user.WxLoginRequest
         * @instance
         */
        WxLoginRequest.prototype.deviceName = "";

        /**
         * Creates a new WxLoginRequest instance using the specified properties.
         * @function create
         * @memberof user.WxLoginRequest
         * @static
         * @param {user.IWxLoginRequest=} [properties] Properties to set
         * @returns {user.WxLoginRequest} WxLoginRequest instance
         */
        WxLoginRequest.create = function create(properties) {
            return new WxLoginRequest(properties);
        };

        /**
         * Encodes the specified WxLoginRequest message. Does not implicitly {@link user.WxLoginRequest.verify|verify} messages.
         * @function encode
         * @memberof user.WxLoginRequest
         * @static
         * @param {user.IWxLoginRequest} message WxLoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WxLoginRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.code);
            if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                writer.uint32(/* id 21, wireType 2 =*/170).string(message.deviceId);
            if (message.deviceName != null && Object.hasOwnProperty.call(message, "deviceName"))
                writer.uint32(/* id 22, wireType 2 =*/178).string(message.deviceName);
            return writer;
        };

        /**
         * Encodes the specified WxLoginRequest message, length delimited. Does not implicitly {@link user.WxLoginRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.WxLoginRequest
         * @static
         * @param {user.IWxLoginRequest} message WxLoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WxLoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WxLoginRequest message from the specified reader or buffer.
         * @function decode
         * @memberof user.WxLoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.WxLoginRequest} WxLoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WxLoginRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.WxLoginRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 11: {
                        message.code = reader.string();
                        break;
                    }
                case 21: {
                        message.deviceId = reader.string();
                        break;
                    }
                case 22: {
                        message.deviceName = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WxLoginRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.WxLoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.WxLoginRequest} WxLoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WxLoginRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WxLoginRequest message.
         * @function verify
         * @memberof user.WxLoginRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WxLoginRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (!$util.isString(message.deviceId))
                    return "deviceId: string expected";
            if (message.deviceName != null && message.hasOwnProperty("deviceName"))
                if (!$util.isString(message.deviceName))
                    return "deviceName: string expected";
            return null;
        };

        /**
         * Creates a WxLoginRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.WxLoginRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.WxLoginRequest} WxLoginRequest
         */
        WxLoginRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.user.WxLoginRequest)
                return object;
            var message = new $root.user.WxLoginRequest();
            if (object.code != null)
                message.code = String(object.code);
            if (object.deviceId != null)
                message.deviceId = String(object.deviceId);
            if (object.deviceName != null)
                message.deviceName = String(object.deviceName);
            return message;
        };

        /**
         * Creates a plain object from a WxLoginRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.WxLoginRequest
         * @static
         * @param {user.WxLoginRequest} message WxLoginRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WxLoginRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = "";
                object.deviceId = "";
                object.deviceName = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                object.deviceId = message.deviceId;
            if (message.deviceName != null && message.hasOwnProperty("deviceName"))
                object.deviceName = message.deviceName;
            return object;
        };

        /**
         * Converts this WxLoginRequest to JSON.
         * @function toJSON
         * @memberof user.WxLoginRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WxLoginRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WxLoginRequest
         * @function getTypeUrl
         * @memberof user.WxLoginRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WxLoginRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/user.WxLoginRequest";
        };

        return WxLoginRequest;
    })();

    user.LoginResponse = (function() {

        /**
         * Properties of a LoginResponse.
         * @memberof user
         * @interface ILoginResponse
         * @property {user.IAuthorization|null} [auth] LoginResponse auth
         */

        /**
         * Constructs a new LoginResponse.
         * @memberof user
         * @classdesc Represents a LoginResponse.
         * @implements ILoginResponse
         * @constructor
         * @param {user.ILoginResponse=} [properties] Properties to set
         */
        function LoginResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginResponse auth.
         * @member {user.IAuthorization|null|undefined} auth
         * @memberof user.LoginResponse
         * @instance
         */
        LoginResponse.prototype.auth = null;

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @function create
         * @memberof user.LoginResponse
         * @static
         * @param {user.ILoginResponse=} [properties] Properties to set
         * @returns {user.LoginResponse} LoginResponse instance
         */
        LoginResponse.create = function create(properties) {
            return new LoginResponse(properties);
        };

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link user.LoginResponse.verify|verify} messages.
         * @function encode
         * @memberof user.LoginResponse
         * @static
         * @param {user.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.auth != null && Object.hasOwnProperty.call(message, "auth"))
                $root.user.Authorization.encode(message.auth, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link user.LoginResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.LoginResponse
         * @static
         * @param {user.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @function decode
         * @memberof user.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.LoginResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.auth = $root.user.Authorization.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginResponse message.
         * @function verify
         * @memberof user.LoginResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.auth != null && message.hasOwnProperty("auth")) {
                var error = $root.user.Authorization.verify(message.auth);
                if (error)
                    return "auth." + error;
            }
            return null;
        };

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.LoginResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.LoginResponse} LoginResponse
         */
        LoginResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.user.LoginResponse)
                return object;
            var message = new $root.user.LoginResponse();
            if (object.auth != null) {
                if (typeof object.auth !== "object")
                    throw TypeError(".user.LoginResponse.auth: object expected");
                message.auth = $root.user.Authorization.fromObject(object.auth);
            }
            return message;
        };

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.LoginResponse
         * @static
         * @param {user.LoginResponse} message LoginResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.auth = null;
            if (message.auth != null && message.hasOwnProperty("auth"))
                object.auth = $root.user.Authorization.toObject(message.auth, options);
            return object;
        };

        /**
         * Converts this LoginResponse to JSON.
         * @function toJSON
         * @memberof user.LoginResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LoginResponse
         * @function getTypeUrl
         * @memberof user.LoginResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/user.LoginResponse";
        };

        return LoginResponse;
    })();

    user.ChangePasswdRequest = (function() {

        /**
         * Properties of a ChangePasswdRequest.
         * @memberof user
         * @interface IChangePasswdRequest
         * @property {user.IAuthorization|null} [auth] ChangePasswdRequest auth
         * @property {string|null} [passwd] ChangePasswdRequest passwd
         */

        /**
         * Constructs a new ChangePasswdRequest.
         * @memberof user
         * @classdesc Represents a ChangePasswdRequest.
         * @implements IChangePasswdRequest
         * @constructor
         * @param {user.IChangePasswdRequest=} [properties] Properties to set
         */
        function ChangePasswdRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChangePasswdRequest auth.
         * @member {user.IAuthorization|null|undefined} auth
         * @memberof user.ChangePasswdRequest
         * @instance
         */
        ChangePasswdRequest.prototype.auth = null;

        /**
         * ChangePasswdRequest passwd.
         * @member {string} passwd
         * @memberof user.ChangePasswdRequest
         * @instance
         */
        ChangePasswdRequest.prototype.passwd = "";

        /**
         * Creates a new ChangePasswdRequest instance using the specified properties.
         * @function create
         * @memberof user.ChangePasswdRequest
         * @static
         * @param {user.IChangePasswdRequest=} [properties] Properties to set
         * @returns {user.ChangePasswdRequest} ChangePasswdRequest instance
         */
        ChangePasswdRequest.create = function create(properties) {
            return new ChangePasswdRequest(properties);
        };

        /**
         * Encodes the specified ChangePasswdRequest message. Does not implicitly {@link user.ChangePasswdRequest.verify|verify} messages.
         * @function encode
         * @memberof user.ChangePasswdRequest
         * @static
         * @param {user.IChangePasswdRequest} message ChangePasswdRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangePasswdRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.auth != null && Object.hasOwnProperty.call(message, "auth"))
                $root.user.Authorization.encode(message.auth, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.passwd != null && Object.hasOwnProperty.call(message, "passwd"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.passwd);
            return writer;
        };

        /**
         * Encodes the specified ChangePasswdRequest message, length delimited. Does not implicitly {@link user.ChangePasswdRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.ChangePasswdRequest
         * @static
         * @param {user.IChangePasswdRequest} message ChangePasswdRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangePasswdRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChangePasswdRequest message from the specified reader or buffer.
         * @function decode
         * @memberof user.ChangePasswdRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.ChangePasswdRequest} ChangePasswdRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangePasswdRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.ChangePasswdRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.auth = $root.user.Authorization.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.passwd = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChangePasswdRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.ChangePasswdRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.ChangePasswdRequest} ChangePasswdRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangePasswdRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChangePasswdRequest message.
         * @function verify
         * @memberof user.ChangePasswdRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChangePasswdRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.auth != null && message.hasOwnProperty("auth")) {
                var error = $root.user.Authorization.verify(message.auth);
                if (error)
                    return "auth." + error;
            }
            if (message.passwd != null && message.hasOwnProperty("passwd"))
                if (!$util.isString(message.passwd))
                    return "passwd: string expected";
            return null;
        };

        /**
         * Creates a ChangePasswdRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.ChangePasswdRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.ChangePasswdRequest} ChangePasswdRequest
         */
        ChangePasswdRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.user.ChangePasswdRequest)
                return object;
            var message = new $root.user.ChangePasswdRequest();
            if (object.auth != null) {
                if (typeof object.auth !== "object")
                    throw TypeError(".user.ChangePasswdRequest.auth: object expected");
                message.auth = $root.user.Authorization.fromObject(object.auth);
            }
            if (object.passwd != null)
                message.passwd = String(object.passwd);
            return message;
        };

        /**
         * Creates a plain object from a ChangePasswdRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.ChangePasswdRequest
         * @static
         * @param {user.ChangePasswdRequest} message ChangePasswdRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChangePasswdRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.auth = null;
                object.passwd = "";
            }
            if (message.auth != null && message.hasOwnProperty("auth"))
                object.auth = $root.user.Authorization.toObject(message.auth, options);
            if (message.passwd != null && message.hasOwnProperty("passwd"))
                object.passwd = message.passwd;
            return object;
        };

        /**
         * Converts this ChangePasswdRequest to JSON.
         * @function toJSON
         * @memberof user.ChangePasswdRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChangePasswdRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ChangePasswdRequest
         * @function getTypeUrl
         * @memberof user.ChangePasswdRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ChangePasswdRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/user.ChangePasswdRequest";
        };

        return ChangePasswdRequest;
    })();

    user.UserService = (function() {

        /**
         * Constructs a new UserService service.
         * @memberof user
         * @classdesc Represents a UserService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function UserService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (UserService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = UserService;

        /**
         * Creates new UserService service using the specified rpc implementation.
         * @function create
         * @memberof user.UserService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {UserService} RPC service. Useful where requests and/or responses are streamed.
         */
        UserService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link user.UserService#login}.
         * @memberof user.UserService
         * @typedef LoginCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {user.LoginResponse} [response] LoginResponse
         */

        /**
         * Calls Login.
         * @function login
         * @memberof user.UserService
         * @instance
         * @param {user.ILoginRequest} request LoginRequest message or plain object
         * @param {user.UserService.LoginCallback} callback Node-style callback called with the error, if any, and LoginResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.login = function login(request, callback) {
            return this.rpcCall(login, $root.user.LoginRequest, $root.user.LoginResponse, request, callback);
        }, "name", { value: "Login" });

        /**
         * Calls Login.
         * @function login
         * @memberof user.UserService
         * @instance
         * @param {user.ILoginRequest} request LoginRequest message or plain object
         * @returns {Promise<user.LoginResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link user.UserService#wxLogin}.
         * @memberof user.UserService
         * @typedef WxLoginCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {user.LoginResponse} [response] LoginResponse
         */

        /**
         * Calls WxLogin.
         * @function wxLogin
         * @memberof user.UserService
         * @instance
         * @param {user.IWxLoginRequest} request WxLoginRequest message or plain object
         * @param {user.UserService.WxLoginCallback} callback Node-style callback called with the error, if any, and LoginResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.wxLogin = function wxLogin(request, callback) {
            return this.rpcCall(wxLogin, $root.user.WxLoginRequest, $root.user.LoginResponse, request, callback);
        }, "name", { value: "WxLogin" });

        /**
         * Calls WxLogin.
         * @function wxLogin
         * @memberof user.UserService
         * @instance
         * @param {user.IWxLoginRequest} request WxLoginRequest message or plain object
         * @returns {Promise<user.LoginResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link user.UserService#changePasswd}.
         * @memberof user.UserService
         * @typedef ChangePasswdCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {google.protobuf.Empty} [response] Empty
         */

        /**
         * Calls ChangePasswd.
         * @function changePasswd
         * @memberof user.UserService
         * @instance
         * @param {user.IChangePasswdRequest} request ChangePasswdRequest message or plain object
         * @param {user.UserService.ChangePasswdCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.changePasswd = function changePasswd(request, callback) {
            return this.rpcCall(changePasswd, $root.user.ChangePasswdRequest, $root.google.protobuf.Empty, request, callback);
        }, "name", { value: "ChangePasswd" });

        /**
         * Calls ChangePasswd.
         * @function changePasswd
         * @memberof user.UserService
         * @instance
         * @param {user.IChangePasswdRequest} request ChangePasswdRequest message or plain object
         * @returns {Promise<google.protobuf.Empty>} Promise
         * @variation 2
         */

        return UserService;
    })();

    return user;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Empty = (function() {

            /**
             * Properties of an Empty.
             * @memberof google.protobuf
             * @interface IEmpty
             */

            /**
             * Constructs a new Empty.
             * @memberof google.protobuf
             * @classdesc Represents an Empty.
             * @implements IEmpty
             * @constructor
             * @param {google.protobuf.IEmpty=} [properties] Properties to set
             */
            function Empty(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Empty instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty=} [properties] Properties to set
             * @returns {google.protobuf.Empty} Empty instance
             */
            Empty.create = function create(properties) {
                return new Empty(properties);
            };

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Empty();
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
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Empty message.
             * @function verify
             * @memberof google.protobuf.Empty
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Empty.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Empty
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Empty} Empty
             */
            Empty.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Empty)
                    return object;
                return new $root.google.protobuf.Empty();
            };

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.Empty} message Empty
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Empty.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Empty to JSON.
             * @function toJSON
             * @memberof google.protobuf.Empty
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Empty.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Empty
             * @function getTypeUrl
             * @memberof google.protobuf.Empty
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Empty.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Empty";
            };

            return Empty;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
