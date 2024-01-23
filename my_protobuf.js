/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.auth = (function() {

    /**
     * Namespace auth.
     * @exports auth
     * @namespace
     */
    var auth = {};

    auth.Authorization = (function() {

        /**
         * Properties of an Authorization.
         * @memberof auth
         * @interface IAuthorization
         * @property {string|null} [jwt] Authorization jwt
         */

        /**
         * Constructs a new Authorization.
         * @memberof auth
         * @classdesc Represents an Authorization.
         * @implements IAuthorization
         * @constructor
         * @param {auth.IAuthorization=} [properties] Properties to set
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
         * @memberof auth.Authorization
         * @instance
         */
        Authorization.prototype.jwt = "";

        /**
         * Creates a new Authorization instance using the specified properties.
         * @function create
         * @memberof auth.Authorization
         * @static
         * @param {auth.IAuthorization=} [properties] Properties to set
         * @returns {auth.Authorization} Authorization instance
         */
        Authorization.create = function create(properties) {
            return new Authorization(properties);
        };

        /**
         * Encodes the specified Authorization message. Does not implicitly {@link auth.Authorization.verify|verify} messages.
         * @function encode
         * @memberof auth.Authorization
         * @static
         * @param {auth.IAuthorization} message Authorization message or plain object to encode
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
         * Encodes the specified Authorization message, length delimited. Does not implicitly {@link auth.Authorization.verify|verify} messages.
         * @function encodeDelimited
         * @memberof auth.Authorization
         * @static
         * @param {auth.IAuthorization} message Authorization message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Authorization.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Authorization message from the specified reader or buffer.
         * @function decode
         * @memberof auth.Authorization
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.Authorization} Authorization
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Authorization.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.Authorization();
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
         * @memberof auth.Authorization
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {auth.Authorization} Authorization
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
         * @memberof auth.Authorization
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
         * @memberof auth.Authorization
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {auth.Authorization} Authorization
         */
        Authorization.fromObject = function fromObject(object) {
            if (object instanceof $root.auth.Authorization)
                return object;
            var message = new $root.auth.Authorization();
            if (object.jwt != null)
                message.jwt = String(object.jwt);
            return message;
        };

        /**
         * Creates a plain object from an Authorization message. Also converts values to other types if specified.
         * @function toObject
         * @memberof auth.Authorization
         * @static
         * @param {auth.Authorization} message Authorization
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
         * @memberof auth.Authorization
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Authorization.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Authorization
         * @function getTypeUrl
         * @memberof auth.Authorization
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Authorization.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/auth.Authorization";
        };

        return Authorization;
    })();

    auth.RefreshAuthRequest = (function() {

        /**
         * Properties of a RefreshAuthRequest.
         * @memberof auth
         * @interface IRefreshAuthRequest
         * @property {auth.IAuthorization|null} [auth] RefreshAuthRequest auth
         * @property {number|Long|null} [expire] RefreshAuthRequest expire
         */

        /**
         * Constructs a new RefreshAuthRequest.
         * @memberof auth
         * @classdesc Represents a RefreshAuthRequest.
         * @implements IRefreshAuthRequest
         * @constructor
         * @param {auth.IRefreshAuthRequest=} [properties] Properties to set
         */
        function RefreshAuthRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RefreshAuthRequest auth.
         * @member {auth.IAuthorization|null|undefined} auth
         * @memberof auth.RefreshAuthRequest
         * @instance
         */
        RefreshAuthRequest.prototype.auth = null;

        /**
         * RefreshAuthRequest expire.
         * @member {number|Long} expire
         * @memberof auth.RefreshAuthRequest
         * @instance
         */
        RefreshAuthRequest.prototype.expire = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new RefreshAuthRequest instance using the specified properties.
         * @function create
         * @memberof auth.RefreshAuthRequest
         * @static
         * @param {auth.IRefreshAuthRequest=} [properties] Properties to set
         * @returns {auth.RefreshAuthRequest} RefreshAuthRequest instance
         */
        RefreshAuthRequest.create = function create(properties) {
            return new RefreshAuthRequest(properties);
        };

        /**
         * Encodes the specified RefreshAuthRequest message. Does not implicitly {@link auth.RefreshAuthRequest.verify|verify} messages.
         * @function encode
         * @memberof auth.RefreshAuthRequest
         * @static
         * @param {auth.IRefreshAuthRequest} message RefreshAuthRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RefreshAuthRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.auth != null && Object.hasOwnProperty.call(message, "auth"))
                $root.auth.Authorization.encode(message.auth, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.expire != null && Object.hasOwnProperty.call(message, "expire"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint64(message.expire);
            return writer;
        };

        /**
         * Encodes the specified RefreshAuthRequest message, length delimited. Does not implicitly {@link auth.RefreshAuthRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof auth.RefreshAuthRequest
         * @static
         * @param {auth.IRefreshAuthRequest} message RefreshAuthRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RefreshAuthRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RefreshAuthRequest message from the specified reader or buffer.
         * @function decode
         * @memberof auth.RefreshAuthRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.RefreshAuthRequest} RefreshAuthRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RefreshAuthRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.RefreshAuthRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.auth = $root.auth.Authorization.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.expire = reader.uint64();
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
         * Decodes a RefreshAuthRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof auth.RefreshAuthRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {auth.RefreshAuthRequest} RefreshAuthRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RefreshAuthRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RefreshAuthRequest message.
         * @function verify
         * @memberof auth.RefreshAuthRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RefreshAuthRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.auth != null && message.hasOwnProperty("auth")) {
                var error = $root.auth.Authorization.verify(message.auth);
                if (error)
                    return "auth." + error;
            }
            if (message.expire != null && message.hasOwnProperty("expire"))
                if (!$util.isInteger(message.expire) && !(message.expire && $util.isInteger(message.expire.low) && $util.isInteger(message.expire.high)))
                    return "expire: integer|Long expected";
            return null;
        };

        /**
         * Creates a RefreshAuthRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof auth.RefreshAuthRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {auth.RefreshAuthRequest} RefreshAuthRequest
         */
        RefreshAuthRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.auth.RefreshAuthRequest)
                return object;
            var message = new $root.auth.RefreshAuthRequest();
            if (object.auth != null) {
                if (typeof object.auth !== "object")
                    throw TypeError(".auth.RefreshAuthRequest.auth: object expected");
                message.auth = $root.auth.Authorization.fromObject(object.auth);
            }
            if (object.expire != null)
                if ($util.Long)
                    (message.expire = $util.Long.fromValue(object.expire)).unsigned = true;
                else if (typeof object.expire === "string")
                    message.expire = parseInt(object.expire, 10);
                else if (typeof object.expire === "number")
                    message.expire = object.expire;
                else if (typeof object.expire === "object")
                    message.expire = new $util.LongBits(object.expire.low >>> 0, object.expire.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a RefreshAuthRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof auth.RefreshAuthRequest
         * @static
         * @param {auth.RefreshAuthRequest} message RefreshAuthRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RefreshAuthRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.auth = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.expire = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.expire = options.longs === String ? "0" : 0;
            }
            if (message.auth != null && message.hasOwnProperty("auth"))
                object.auth = $root.auth.Authorization.toObject(message.auth, options);
            if (message.expire != null && message.hasOwnProperty("expire"))
                if (typeof message.expire === "number")
                    object.expire = options.longs === String ? String(message.expire) : message.expire;
                else
                    object.expire = options.longs === String ? $util.Long.prototype.toString.call(message.expire) : options.longs === Number ? new $util.LongBits(message.expire.low >>> 0, message.expire.high >>> 0).toNumber(true) : message.expire;
            return object;
        };

        /**
         * Converts this RefreshAuthRequest to JSON.
         * @function toJSON
         * @memberof auth.RefreshAuthRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RefreshAuthRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RefreshAuthRequest
         * @function getTypeUrl
         * @memberof auth.RefreshAuthRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RefreshAuthRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/auth.RefreshAuthRequest";
        };

        return RefreshAuthRequest;
    })();

    auth.AuthService = (function() {

        /**
         * Constructs a new AuthService service.
         * @memberof auth
         * @classdesc Represents an AuthService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function AuthService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (AuthService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = AuthService;

        /**
         * Creates new AuthService service using the specified rpc implementation.
         * @function create
         * @memberof auth.AuthService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {AuthService} RPC service. Useful where requests and/or responses are streamed.
         */
        AuthService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link auth.AuthService#refreshAuth}.
         * @memberof auth.AuthService
         * @typedef RefreshAuthCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {auth.Authorization} [response] Authorization
         */

        /**
         * Calls RefreshAuth.
         * @function refreshAuth
         * @memberof auth.AuthService
         * @instance
         * @param {auth.IRefreshAuthRequest} request RefreshAuthRequest message or plain object
         * @param {auth.AuthService.RefreshAuthCallback} callback Node-style callback called with the error, if any, and Authorization
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AuthService.prototype.refreshAuth = function refreshAuth(request, callback) {
            return this.rpcCall(refreshAuth, $root.auth.RefreshAuthRequest, $root.auth.Authorization, request, callback);
        }, "name", { value: "RefreshAuth" });

        /**
         * Calls RefreshAuth.
         * @function refreshAuth
         * @memberof auth.AuthService
         * @instance
         * @param {auth.IRefreshAuthRequest} request RefreshAuthRequest message or plain object
         * @returns {Promise<auth.Authorization>} Promise
         * @variation 2
         */

        return AuthService;
    })();

    return auth;
})();

$root.common = (function() {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    var common = {};

    common.Empty = (function() {

        /**
         * Properties of an Empty.
         * @memberof common
         * @interface IEmpty
         */

        /**
         * Constructs a new Empty.
         * @memberof common
         * @classdesc Represents an Empty.
         * @implements IEmpty
         * @constructor
         * @param {common.IEmpty=} [properties] Properties to set
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
         * @memberof common.Empty
         * @static
         * @param {common.IEmpty=} [properties] Properties to set
         * @returns {common.Empty} Empty instance
         */
        Empty.create = function create(properties) {
            return new Empty(properties);
        };

        /**
         * Encodes the specified Empty message. Does not implicitly {@link common.Empty.verify|verify} messages.
         * @function encode
         * @memberof common.Empty
         * @static
         * @param {common.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link common.Empty.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Empty
         * @static
         * @param {common.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @function decode
         * @memberof common.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Empty();
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
         * @memberof common.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Empty} Empty
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
         * @memberof common.Empty
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
         * @memberof common.Empty
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Empty} Empty
         */
        Empty.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Empty)
                return object;
            return new $root.common.Empty();
        };

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Empty
         * @static
         * @param {common.Empty} message Empty
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Empty.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Empty to JSON.
         * @function toJSON
         * @memberof common.Empty
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Empty.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Empty
         * @function getTypeUrl
         * @memberof common.Empty
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Empty.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.Empty";
        };

        return Empty;
    })();

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

$root.error_code = (function() {

    /**
     * Namespace error_code.
     * @exports error_code
     * @namespace
     */
    var error_code = {};

    /**
     * ErrorCode enum.
     * @name error_code.ErrorCode
     * @enum {number}
     * @property {number} SUCCESS=0 SUCCESS value
     * @property {number} INVALID_INPUT=1001 INVALID_INPUT value
     * @property {number} NOT_SIGNUP=2001 NOT_SIGNUP value
     * @property {number} PASSWD_ERR=2002 PASSWD_ERR value
     * @property {number} INVALID_AUTH=2011 INVALID_AUTH value
     * @property {number} EXPIRED_AUTH=2012 EXPIRED_AUTH value
     * @property {number} EXPIRED_AUTH_SN=2013 EXPIRED_AUTH_SN value
     * @property {number} PERMISSION_DENIED=2021 PERMISSION_DENIED value
     * @property {number} DB_ERR=7001 DB_ERR value
     * @property {number} WX_ERR=8001 WX_ERR value
     */
    error_code.ErrorCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SUCCESS"] = 0;
        values[valuesById[1001] = "INVALID_INPUT"] = 1001;
        values[valuesById[2001] = "NOT_SIGNUP"] = 2001;
        values[valuesById[2002] = "PASSWD_ERR"] = 2002;
        values[valuesById[2011] = "INVALID_AUTH"] = 2011;
        values[valuesById[2012] = "EXPIRED_AUTH"] = 2012;
        values[valuesById[2013] = "EXPIRED_AUTH_SN"] = 2013;
        values[valuesById[2021] = "PERMISSION_DENIED"] = 2021;
        values[valuesById[7001] = "DB_ERR"] = 7001;
        values[valuesById[8001] = "WX_ERR"] = 8001;
        return values;
    })();

    return error_code;
})();

$root.role = (function() {

    /**
     * Namespace role.
     * @exports role
     * @namespace
     */
    var role = {};

    /**
     * Role enum.
     * @name role.Role
     * @enum {number}
     * @property {number} USER=0 USER value
     * @property {number} ADMIN=20 ADMIN value
     * @property {number} BLACK=99 BLACK value
     */
    role.Role = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "USER"] = 0;
        values[valuesById[20] = "ADMIN"] = 20;
        values[valuesById[99] = "BLACK"] = 99;
        return values;
    })();

    role.GetRoleRequest = (function() {

        /**
         * Properties of a GetRoleRequest.
         * @memberof role
         * @interface IGetRoleRequest
         * @property {auth.IAuthorization|null} [auth] GetRoleRequest auth
         * @property {number|null} [uid] GetRoleRequest uid
         */

        /**
         * Constructs a new GetRoleRequest.
         * @memberof role
         * @classdesc Represents a GetRoleRequest.
         * @implements IGetRoleRequest
         * @constructor
         * @param {role.IGetRoleRequest=} [properties] Properties to set
         */
        function GetRoleRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRoleRequest auth.
         * @member {auth.IAuthorization|null|undefined} auth
         * @memberof role.GetRoleRequest
         * @instance
         */
        GetRoleRequest.prototype.auth = null;

        /**
         * GetRoleRequest uid.
         * @member {number} uid
         * @memberof role.GetRoleRequest
         * @instance
         */
        GetRoleRequest.prototype.uid = 0;

        /**
         * Creates a new GetRoleRequest instance using the specified properties.
         * @function create
         * @memberof role.GetRoleRequest
         * @static
         * @param {role.IGetRoleRequest=} [properties] Properties to set
         * @returns {role.GetRoleRequest} GetRoleRequest instance
         */
        GetRoleRequest.create = function create(properties) {
            return new GetRoleRequest(properties);
        };

        /**
         * Encodes the specified GetRoleRequest message. Does not implicitly {@link role.GetRoleRequest.verify|verify} messages.
         * @function encode
         * @memberof role.GetRoleRequest
         * @static
         * @param {role.IGetRoleRequest} message GetRoleRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoleRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.auth != null && Object.hasOwnProperty.call(message, "auth"))
                $root.auth.Authorization.encode(message.auth, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.uid);
            return writer;
        };

        /**
         * Encodes the specified GetRoleRequest message, length delimited. Does not implicitly {@link role.GetRoleRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof role.GetRoleRequest
         * @static
         * @param {role.IGetRoleRequest} message GetRoleRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoleRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRoleRequest message from the specified reader or buffer.
         * @function decode
         * @memberof role.GetRoleRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {role.GetRoleRequest} GetRoleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRoleRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.role.GetRoleRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.auth = $root.auth.Authorization.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.uid = reader.uint32();
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
         * Decodes a GetRoleRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof role.GetRoleRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {role.GetRoleRequest} GetRoleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRoleRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRoleRequest message.
         * @function verify
         * @memberof role.GetRoleRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRoleRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.auth != null && message.hasOwnProperty("auth")) {
                var error = $root.auth.Authorization.verify(message.auth);
                if (error)
                    return "auth." + error;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            return null;
        };

        /**
         * Creates a GetRoleRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof role.GetRoleRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {role.GetRoleRequest} GetRoleRequest
         */
        GetRoleRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.role.GetRoleRequest)
                return object;
            var message = new $root.role.GetRoleRequest();
            if (object.auth != null) {
                if (typeof object.auth !== "object")
                    throw TypeError(".role.GetRoleRequest.auth: object expected");
                message.auth = $root.auth.Authorization.fromObject(object.auth);
            }
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a GetRoleRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof role.GetRoleRequest
         * @static
         * @param {role.GetRoleRequest} message GetRoleRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRoleRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.auth = null;
                object.uid = 0;
            }
            if (message.auth != null && message.hasOwnProperty("auth"))
                object.auth = $root.auth.Authorization.toObject(message.auth, options);
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            return object;
        };

        /**
         * Converts this GetRoleRequest to JSON.
         * @function toJSON
         * @memberof role.GetRoleRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRoleRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetRoleRequest
         * @function getTypeUrl
         * @memberof role.GetRoleRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetRoleRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/role.GetRoleRequest";
        };

        return GetRoleRequest;
    })();

    role.GetRoleResponse = (function() {

        /**
         * Properties of a GetRoleResponse.
         * @memberof role
         * @interface IGetRoleResponse
         * @property {Array.<role.Role>|null} [roles] GetRoleResponse roles
         */

        /**
         * Constructs a new GetRoleResponse.
         * @memberof role
         * @classdesc Represents a GetRoleResponse.
         * @implements IGetRoleResponse
         * @constructor
         * @param {role.IGetRoleResponse=} [properties] Properties to set
         */
        function GetRoleResponse(properties) {
            this.roles = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRoleResponse roles.
         * @member {Array.<role.Role>} roles
         * @memberof role.GetRoleResponse
         * @instance
         */
        GetRoleResponse.prototype.roles = $util.emptyArray;

        /**
         * Creates a new GetRoleResponse instance using the specified properties.
         * @function create
         * @memberof role.GetRoleResponse
         * @static
         * @param {role.IGetRoleResponse=} [properties] Properties to set
         * @returns {role.GetRoleResponse} GetRoleResponse instance
         */
        GetRoleResponse.create = function create(properties) {
            return new GetRoleResponse(properties);
        };

        /**
         * Encodes the specified GetRoleResponse message. Does not implicitly {@link role.GetRoleResponse.verify|verify} messages.
         * @function encode
         * @memberof role.GetRoleResponse
         * @static
         * @param {role.IGetRoleResponse} message GetRoleResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoleResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roles != null && message.roles.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.roles.length; ++i)
                    writer.int32(message.roles[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified GetRoleResponse message, length delimited. Does not implicitly {@link role.GetRoleResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof role.GetRoleResponse
         * @static
         * @param {role.IGetRoleResponse} message GetRoleResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoleResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRoleResponse message from the specified reader or buffer.
         * @function decode
         * @memberof role.GetRoleResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {role.GetRoleResponse} GetRoleResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRoleResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.role.GetRoleResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.roles && message.roles.length))
                            message.roles = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.roles.push(reader.int32());
                        } else
                            message.roles.push(reader.int32());
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
         * Decodes a GetRoleResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof role.GetRoleResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {role.GetRoleResponse} GetRoleResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRoleResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRoleResponse message.
         * @function verify
         * @memberof role.GetRoleResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRoleResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roles != null && message.hasOwnProperty("roles")) {
                if (!Array.isArray(message.roles))
                    return "roles: array expected";
                for (var i = 0; i < message.roles.length; ++i)
                    switch (message.roles[i]) {
                    default:
                        return "roles: enum value[] expected";
                    case 0:
                    case 20:
                    case 99:
                        break;
                    }
            }
            return null;
        };

        /**
         * Creates a GetRoleResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof role.GetRoleResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {role.GetRoleResponse} GetRoleResponse
         */
        GetRoleResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.role.GetRoleResponse)
                return object;
            var message = new $root.role.GetRoleResponse();
            if (object.roles) {
                if (!Array.isArray(object.roles))
                    throw TypeError(".role.GetRoleResponse.roles: array expected");
                message.roles = [];
                for (var i = 0; i < object.roles.length; ++i)
                    switch (object.roles[i]) {
                    default:
                        if (typeof object.roles[i] === "number") {
                            message.roles[i] = object.roles[i];
                            break;
                        }
                    case "USER":
                    case 0:
                        message.roles[i] = 0;
                        break;
                    case "ADMIN":
                    case 20:
                        message.roles[i] = 20;
                        break;
                    case "BLACK":
                    case 99:
                        message.roles[i] = 99;
                        break;
                    }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetRoleResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof role.GetRoleResponse
         * @static
         * @param {role.GetRoleResponse} message GetRoleResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRoleResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.roles = [];
            if (message.roles && message.roles.length) {
                object.roles = [];
                for (var j = 0; j < message.roles.length; ++j)
                    object.roles[j] = options.enums === String ? $root.role.Role[message.roles[j]] === undefined ? message.roles[j] : $root.role.Role[message.roles[j]] : message.roles[j];
            }
            return object;
        };

        /**
         * Converts this GetRoleResponse to JSON.
         * @function toJSON
         * @memberof role.GetRoleResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRoleResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetRoleResponse
         * @function getTypeUrl
         * @memberof role.GetRoleResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetRoleResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/role.GetRoleResponse";
        };

        return GetRoleResponse;
    })();

    role.AddRoleRequest = (function() {

        /**
         * Properties of an AddRoleRequest.
         * @memberof role
         * @interface IAddRoleRequest
         * @property {auth.IAuthorization|null} [auth] AddRoleRequest auth
         * @property {number|null} [uid] AddRoleRequest uid
         * @property {role.Role|null} [role] AddRoleRequest role
         */

        /**
         * Constructs a new AddRoleRequest.
         * @memberof role
         * @classdesc Represents an AddRoleRequest.
         * @implements IAddRoleRequest
         * @constructor
         * @param {role.IAddRoleRequest=} [properties] Properties to set
         */
        function AddRoleRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddRoleRequest auth.
         * @member {auth.IAuthorization|null|undefined} auth
         * @memberof role.AddRoleRequest
         * @instance
         */
        AddRoleRequest.prototype.auth = null;

        /**
         * AddRoleRequest uid.
         * @member {number} uid
         * @memberof role.AddRoleRequest
         * @instance
         */
        AddRoleRequest.prototype.uid = 0;

        /**
         * AddRoleRequest role.
         * @member {role.Role} role
         * @memberof role.AddRoleRequest
         * @instance
         */
        AddRoleRequest.prototype.role = 0;

        /**
         * Creates a new AddRoleRequest instance using the specified properties.
         * @function create
         * @memberof role.AddRoleRequest
         * @static
         * @param {role.IAddRoleRequest=} [properties] Properties to set
         * @returns {role.AddRoleRequest} AddRoleRequest instance
         */
        AddRoleRequest.create = function create(properties) {
            return new AddRoleRequest(properties);
        };

        /**
         * Encodes the specified AddRoleRequest message. Does not implicitly {@link role.AddRoleRequest.verify|verify} messages.
         * @function encode
         * @memberof role.AddRoleRequest
         * @static
         * @param {role.IAddRoleRequest} message AddRoleRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddRoleRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.auth != null && Object.hasOwnProperty.call(message, "auth"))
                $root.auth.Authorization.encode(message.auth, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.uid);
            if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.role);
            return writer;
        };

        /**
         * Encodes the specified AddRoleRequest message, length delimited. Does not implicitly {@link role.AddRoleRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof role.AddRoleRequest
         * @static
         * @param {role.IAddRoleRequest} message AddRoleRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddRoleRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddRoleRequest message from the specified reader or buffer.
         * @function decode
         * @memberof role.AddRoleRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {role.AddRoleRequest} AddRoleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddRoleRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.role.AddRoleRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.auth = $root.auth.Authorization.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.uid = reader.uint32();
                        break;
                    }
                case 12: {
                        message.role = reader.int32();
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
         * Decodes an AddRoleRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof role.AddRoleRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {role.AddRoleRequest} AddRoleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddRoleRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddRoleRequest message.
         * @function verify
         * @memberof role.AddRoleRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddRoleRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.auth != null && message.hasOwnProperty("auth")) {
                var error = $root.auth.Authorization.verify(message.auth);
                if (error)
                    return "auth." + error;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.role != null && message.hasOwnProperty("role"))
                switch (message.role) {
                default:
                    return "role: enum value expected";
                case 0:
                case 20:
                case 99:
                    break;
                }
            return null;
        };

        /**
         * Creates an AddRoleRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof role.AddRoleRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {role.AddRoleRequest} AddRoleRequest
         */
        AddRoleRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.role.AddRoleRequest)
                return object;
            var message = new $root.role.AddRoleRequest();
            if (object.auth != null) {
                if (typeof object.auth !== "object")
                    throw TypeError(".role.AddRoleRequest.auth: object expected");
                message.auth = $root.auth.Authorization.fromObject(object.auth);
            }
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            switch (object.role) {
            default:
                if (typeof object.role === "number") {
                    message.role = object.role;
                    break;
                }
                break;
            case "USER":
            case 0:
                message.role = 0;
                break;
            case "ADMIN":
            case 20:
                message.role = 20;
                break;
            case "BLACK":
            case 99:
                message.role = 99;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from an AddRoleRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof role.AddRoleRequest
         * @static
         * @param {role.AddRoleRequest} message AddRoleRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddRoleRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.auth = null;
                object.uid = 0;
                object.role = options.enums === String ? "USER" : 0;
            }
            if (message.auth != null && message.hasOwnProperty("auth"))
                object.auth = $root.auth.Authorization.toObject(message.auth, options);
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.role != null && message.hasOwnProperty("role"))
                object.role = options.enums === String ? $root.role.Role[message.role] === undefined ? message.role : $root.role.Role[message.role] : message.role;
            return object;
        };

        /**
         * Converts this AddRoleRequest to JSON.
         * @function toJSON
         * @memberof role.AddRoleRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddRoleRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddRoleRequest
         * @function getTypeUrl
         * @memberof role.AddRoleRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddRoleRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/role.AddRoleRequest";
        };

        return AddRoleRequest;
    })();

    role.DelRoleRequest = (function() {

        /**
         * Properties of a DelRoleRequest.
         * @memberof role
         * @interface IDelRoleRequest
         * @property {auth.IAuthorization|null} [auth] DelRoleRequest auth
         * @property {number|null} [uid] DelRoleRequest uid
         * @property {role.Role|null} [role] DelRoleRequest role
         */

        /**
         * Constructs a new DelRoleRequest.
         * @memberof role
         * @classdesc Represents a DelRoleRequest.
         * @implements IDelRoleRequest
         * @constructor
         * @param {role.IDelRoleRequest=} [properties] Properties to set
         */
        function DelRoleRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DelRoleRequest auth.
         * @member {auth.IAuthorization|null|undefined} auth
         * @memberof role.DelRoleRequest
         * @instance
         */
        DelRoleRequest.prototype.auth = null;

        /**
         * DelRoleRequest uid.
         * @member {number} uid
         * @memberof role.DelRoleRequest
         * @instance
         */
        DelRoleRequest.prototype.uid = 0;

        /**
         * DelRoleRequest role.
         * @member {role.Role} role
         * @memberof role.DelRoleRequest
         * @instance
         */
        DelRoleRequest.prototype.role = 0;

        /**
         * Creates a new DelRoleRequest instance using the specified properties.
         * @function create
         * @memberof role.DelRoleRequest
         * @static
         * @param {role.IDelRoleRequest=} [properties] Properties to set
         * @returns {role.DelRoleRequest} DelRoleRequest instance
         */
        DelRoleRequest.create = function create(properties) {
            return new DelRoleRequest(properties);
        };

        /**
         * Encodes the specified DelRoleRequest message. Does not implicitly {@link role.DelRoleRequest.verify|verify} messages.
         * @function encode
         * @memberof role.DelRoleRequest
         * @static
         * @param {role.IDelRoleRequest} message DelRoleRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelRoleRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.auth != null && Object.hasOwnProperty.call(message, "auth"))
                $root.auth.Authorization.encode(message.auth, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.uid);
            if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.role);
            return writer;
        };

        /**
         * Encodes the specified DelRoleRequest message, length delimited. Does not implicitly {@link role.DelRoleRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof role.DelRoleRequest
         * @static
         * @param {role.IDelRoleRequest} message DelRoleRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelRoleRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DelRoleRequest message from the specified reader or buffer.
         * @function decode
         * @memberof role.DelRoleRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {role.DelRoleRequest} DelRoleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelRoleRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.role.DelRoleRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.auth = $root.auth.Authorization.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.uid = reader.uint32();
                        break;
                    }
                case 12: {
                        message.role = reader.int32();
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
         * Decodes a DelRoleRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof role.DelRoleRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {role.DelRoleRequest} DelRoleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelRoleRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DelRoleRequest message.
         * @function verify
         * @memberof role.DelRoleRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DelRoleRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.auth != null && message.hasOwnProperty("auth")) {
                var error = $root.auth.Authorization.verify(message.auth);
                if (error)
                    return "auth." + error;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.role != null && message.hasOwnProperty("role"))
                switch (message.role) {
                default:
                    return "role: enum value expected";
                case 0:
                case 20:
                case 99:
                    break;
                }
            return null;
        };

        /**
         * Creates a DelRoleRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof role.DelRoleRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {role.DelRoleRequest} DelRoleRequest
         */
        DelRoleRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.role.DelRoleRequest)
                return object;
            var message = new $root.role.DelRoleRequest();
            if (object.auth != null) {
                if (typeof object.auth !== "object")
                    throw TypeError(".role.DelRoleRequest.auth: object expected");
                message.auth = $root.auth.Authorization.fromObject(object.auth);
            }
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            switch (object.role) {
            default:
                if (typeof object.role === "number") {
                    message.role = object.role;
                    break;
                }
                break;
            case "USER":
            case 0:
                message.role = 0;
                break;
            case "ADMIN":
            case 20:
                message.role = 20;
                break;
            case "BLACK":
            case 99:
                message.role = 99;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a DelRoleRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof role.DelRoleRequest
         * @static
         * @param {role.DelRoleRequest} message DelRoleRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DelRoleRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.auth = null;
                object.uid = 0;
                object.role = options.enums === String ? "USER" : 0;
            }
            if (message.auth != null && message.hasOwnProperty("auth"))
                object.auth = $root.auth.Authorization.toObject(message.auth, options);
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.role != null && message.hasOwnProperty("role"))
                object.role = options.enums === String ? $root.role.Role[message.role] === undefined ? message.role : $root.role.Role[message.role] : message.role;
            return object;
        };

        /**
         * Converts this DelRoleRequest to JSON.
         * @function toJSON
         * @memberof role.DelRoleRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DelRoleRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DelRoleRequest
         * @function getTypeUrl
         * @memberof role.DelRoleRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DelRoleRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/role.DelRoleRequest";
        };

        return DelRoleRequest;
    })();

    role.RoleService = (function() {

        /**
         * Constructs a new RoleService service.
         * @memberof role
         * @classdesc Represents a RoleService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function RoleService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (RoleService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = RoleService;

        /**
         * Creates new RoleService service using the specified rpc implementation.
         * @function create
         * @memberof role.RoleService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {RoleService} RPC service. Useful where requests and/or responses are streamed.
         */
        RoleService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link role.RoleService#getRole}.
         * @memberof role.RoleService
         * @typedef GetRoleCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {role.GetRoleResponse} [response] GetRoleResponse
         */

        /**
         * Calls GetRole.
         * @function getRole
         * @memberof role.RoleService
         * @instance
         * @param {role.IGetRoleRequest} request GetRoleRequest message or plain object
         * @param {role.RoleService.GetRoleCallback} callback Node-style callback called with the error, if any, and GetRoleResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RoleService.prototype.getRole = function getRole(request, callback) {
            return this.rpcCall(getRole, $root.role.GetRoleRequest, $root.role.GetRoleResponse, request, callback);
        }, "name", { value: "GetRole" });

        /**
         * Calls GetRole.
         * @function getRole
         * @memberof role.RoleService
         * @instance
         * @param {role.IGetRoleRequest} request GetRoleRequest message or plain object
         * @returns {Promise<role.GetRoleResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link role.RoleService#addRole}.
         * @memberof role.RoleService
         * @typedef AddRoleCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {common.Empty} [response] Empty
         */

        /**
         * Calls AddRole.
         * @function addRole
         * @memberof role.RoleService
         * @instance
         * @param {role.IAddRoleRequest} request AddRoleRequest message or plain object
         * @param {role.RoleService.AddRoleCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RoleService.prototype.addRole = function addRole(request, callback) {
            return this.rpcCall(addRole, $root.role.AddRoleRequest, $root.common.Empty, request, callback);
        }, "name", { value: "AddRole" });

        /**
         * Calls AddRole.
         * @function addRole
         * @memberof role.RoleService
         * @instance
         * @param {role.IAddRoleRequest} request AddRoleRequest message or plain object
         * @returns {Promise<common.Empty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link role.RoleService#delRole}.
         * @memberof role.RoleService
         * @typedef DelRoleCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {common.Empty} [response] Empty
         */

        /**
         * Calls DelRole.
         * @function delRole
         * @memberof role.RoleService
         * @instance
         * @param {role.IDelRoleRequest} request DelRoleRequest message or plain object
         * @param {role.RoleService.DelRoleCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RoleService.prototype.delRole = function delRole(request, callback) {
            return this.rpcCall(delRole, $root.role.DelRoleRequest, $root.common.Empty, request, callback);
        }, "name", { value: "DelRole" });

        /**
         * Calls DelRole.
         * @function delRole
         * @memberof role.RoleService
         * @instance
         * @param {role.IDelRoleRequest} request DelRoleRequest message or plain object
         * @returns {Promise<common.Empty>} Promise
         * @variation 2
         */

        return RoleService;
    })();

    return role;
})();

$root.user = (function() {

    /**
     * Namespace user.
     * @exports user
     * @namespace
     */
    var user = {};

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
         * @property {number|Long|null} [expire] LoginRequest expire
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
        LoginRequest.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

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
         * @member {number|Long} expire
         * @memberof user.LoginRequest
         * @instance
         */
        LoginRequest.prototype.expire = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

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
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.timestamp);
            if (message.uname != null && Object.hasOwnProperty.call(message, "uname"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.uname);
            if (message.passwd != null && Object.hasOwnProperty.call(message, "passwd"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.passwd);
            if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                writer.uint32(/* id 21, wireType 2 =*/170).string(message.deviceId);
            if (message.deviceName != null && Object.hasOwnProperty.call(message, "deviceName"))
                writer.uint32(/* id 22, wireType 2 =*/178).string(message.deviceName);
            if (message.expire != null && Object.hasOwnProperty.call(message, "expire"))
                writer.uint32(/* id 51, wireType 0 =*/408).uint64(message.expire);
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
                        message.timestamp = reader.uint64();
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
                        message.expire = reader.uint64();
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
                if (!$util.isInteger(message.expire) && !(message.expire && $util.isInteger(message.expire.low) && $util.isInteger(message.expire.high)))
                    return "expire: integer|Long expected";
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
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
            if (object.uname != null)
                message.uname = String(object.uname);
            if (object.passwd != null)
                message.passwd = String(object.passwd);
            if (object.deviceId != null)
                message.deviceId = String(object.deviceId);
            if (object.deviceName != null)
                message.deviceName = String(object.deviceName);
            if (object.expire != null)
                if ($util.Long)
                    (message.expire = $util.Long.fromValue(object.expire)).unsigned = true;
                else if (typeof object.expire === "string")
                    message.expire = parseInt(object.expire, 10);
                else if (typeof object.expire === "number")
                    message.expire = object.expire;
                else if (typeof object.expire === "object")
                    message.expire = new $util.LongBits(object.expire.low >>> 0, object.expire.high >>> 0).toNumber(true);
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
                    var long = new $util.Long(0, 0, true);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                object.uname = "";
                object.passwd = "";
                object.deviceId = "";
                object.deviceName = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.expire = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.expire = options.longs === String ? "0" : 0;
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
            if (message.uname != null && message.hasOwnProperty("uname"))
                object.uname = message.uname;
            if (message.passwd != null && message.hasOwnProperty("passwd"))
                object.passwd = message.passwd;
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                object.deviceId = message.deviceId;
            if (message.deviceName != null && message.hasOwnProperty("deviceName"))
                object.deviceName = message.deviceName;
            if (message.expire != null && message.hasOwnProperty("expire"))
                if (typeof message.expire === "number")
                    object.expire = options.longs === String ? String(message.expire) : message.expire;
                else
                    object.expire = options.longs === String ? $util.Long.prototype.toString.call(message.expire) : options.longs === Number ? new $util.LongBits(message.expire.low >>> 0, message.expire.high >>> 0).toNumber(true) : message.expire;
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
         * @property {number|Long|null} [expire] WxLoginRequest expire
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
         * WxLoginRequest expire.
         * @member {number|Long} expire
         * @memberof user.WxLoginRequest
         * @instance
         */
        WxLoginRequest.prototype.expire = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

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
            if (message.expire != null && Object.hasOwnProperty.call(message, "expire"))
                writer.uint32(/* id 51, wireType 0 =*/408).uint64(message.expire);
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
                case 51: {
                        message.expire = reader.uint64();
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
            if (message.expire != null && message.hasOwnProperty("expire"))
                if (!$util.isInteger(message.expire) && !(message.expire && $util.isInteger(message.expire.low) && $util.isInteger(message.expire.high)))
                    return "expire: integer|Long expected";
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
            if (object.expire != null)
                if ($util.Long)
                    (message.expire = $util.Long.fromValue(object.expire)).unsigned = true;
                else if (typeof object.expire === "string")
                    message.expire = parseInt(object.expire, 10);
                else if (typeof object.expire === "number")
                    message.expire = object.expire;
                else if (typeof object.expire === "object")
                    message.expire = new $util.LongBits(object.expire.low >>> 0, object.expire.high >>> 0).toNumber(true);
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
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.expire = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.expire = options.longs === String ? "0" : 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                object.deviceId = message.deviceId;
            if (message.deviceName != null && message.hasOwnProperty("deviceName"))
                object.deviceName = message.deviceName;
            if (message.expire != null && message.hasOwnProperty("expire"))
                if (typeof message.expire === "number")
                    object.expire = options.longs === String ? String(message.expire) : message.expire;
                else
                    object.expire = options.longs === String ? $util.Long.prototype.toString.call(message.expire) : options.longs === Number ? new $util.LongBits(message.expire.low >>> 0, message.expire.high >>> 0).toNumber(true) : message.expire;
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
         * @property {auth.IAuthorization|null} [auth] LoginResponse auth
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
         * @member {auth.IAuthorization|null|undefined} auth
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
                $root.auth.Authorization.encode(message.auth, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                        message.auth = $root.auth.Authorization.decode(reader, reader.uint32());
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
                var error = $root.auth.Authorization.verify(message.auth);
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
                message.auth = $root.auth.Authorization.fromObject(object.auth);
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
                object.auth = $root.auth.Authorization.toObject(message.auth, options);
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
         * @property {auth.IAuthorization|null} [auth] ChangePasswdRequest auth
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
         * @member {auth.IAuthorization|null|undefined} auth
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
                $root.auth.Authorization.encode(message.auth, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                        message.auth = $root.auth.Authorization.decode(reader, reader.uint32());
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
                var error = $root.auth.Authorization.verify(message.auth);
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
                message.auth = $root.auth.Authorization.fromObject(object.auth);
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
                object.auth = $root.auth.Authorization.toObject(message.auth, options);
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
         * @param {common.Empty} [response] Empty
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
            return this.rpcCall(changePasswd, $root.user.ChangePasswdRequest, $root.common.Empty, request, callback);
        }, "name", { value: "ChangePasswd" });

        /**
         * Calls ChangePasswd.
         * @function changePasswd
         * @memberof user.UserService
         * @instance
         * @param {user.IChangePasswdRequest} request ChangePasswdRequest message or plain object
         * @returns {Promise<common.Empty>} Promise
         * @variation 2
         */

        return UserService;
    })();

    return user;
})();

module.exports = $root;
