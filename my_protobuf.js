/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.app = (function() {

    /**
     * Namespace app.
     * @exports app
     * @namespace
     */
    var app = {};

    app.AppIndex = (function() {

        /**
         * Properties of an AppIndex.
         * @memberof app
         * @interface IAppIndex
         * @property {number|null} [saas_id] AppIndex saas_id
         * @property {number|null} [app_id] AppIndex app_id
         */

        /**
         * Constructs a new AppIndex.
         * @memberof app
         * @classdesc Represents an AppIndex.
         * @implements IAppIndex
         * @constructor
         * @param {app.IAppIndex=} [properties] Properties to set
         */
        function AppIndex(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AppIndex saas_id.
         * @member {number} saas_id
         * @memberof app.AppIndex
         * @instance
         */
        AppIndex.prototype.saas_id = 0;

        /**
         * AppIndex app_id.
         * @member {number} app_id
         * @memberof app.AppIndex
         * @instance
         */
        AppIndex.prototype.app_id = 0;

        /**
         * Creates a new AppIndex instance using the specified properties.
         * @function create
         * @memberof app.AppIndex
         * @static
         * @param {app.IAppIndex=} [properties] Properties to set
         * @returns {app.AppIndex} AppIndex instance
         */
        AppIndex.create = function create(properties) {
            return new AppIndex(properties);
        };

        /**
         * Encodes the specified AppIndex message. Does not implicitly {@link app.AppIndex.verify|verify} messages.
         * @function encode
         * @memberof app.AppIndex
         * @static
         * @param {app.IAppIndex} message AppIndex message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppIndex.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.saas_id != null && Object.hasOwnProperty.call(message, "saas_id"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.saas_id);
            if (message.app_id != null && Object.hasOwnProperty.call(message, "app_id"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.app_id);
            return writer;
        };

        /**
         * Encodes the specified AppIndex message, length delimited. Does not implicitly {@link app.AppIndex.verify|verify} messages.
         * @function encodeDelimited
         * @memberof app.AppIndex
         * @static
         * @param {app.IAppIndex} message AppIndex message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppIndex.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AppIndex message from the specified reader or buffer.
         * @function decode
         * @memberof app.AppIndex
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {app.AppIndex} AppIndex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppIndex.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.AppIndex();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 11: {
                        message.saas_id = reader.uint32();
                        break;
                    }
                case 12: {
                        message.app_id = reader.uint32();
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
         * Decodes an AppIndex message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof app.AppIndex
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {app.AppIndex} AppIndex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppIndex.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AppIndex message.
         * @function verify
         * @memberof app.AppIndex
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AppIndex.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.saas_id != null && message.hasOwnProperty("saas_id"))
                if (!$util.isInteger(message.saas_id))
                    return "saas_id: integer expected";
            if (message.app_id != null && message.hasOwnProperty("app_id"))
                if (!$util.isInteger(message.app_id))
                    return "app_id: integer expected";
            return null;
        };

        /**
         * Creates an AppIndex message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof app.AppIndex
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {app.AppIndex} AppIndex
         */
        AppIndex.fromObject = function fromObject(object) {
            if (object instanceof $root.app.AppIndex)
                return object;
            var message = new $root.app.AppIndex();
            if (object.saas_id != null)
                message.saas_id = object.saas_id >>> 0;
            if (object.app_id != null)
                message.app_id = object.app_id >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an AppIndex message. Also converts values to other types if specified.
         * @function toObject
         * @memberof app.AppIndex
         * @static
         * @param {app.AppIndex} message AppIndex
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AppIndex.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.saas_id = 0;
                object.app_id = 0;
            }
            if (message.saas_id != null && message.hasOwnProperty("saas_id"))
                object.saas_id = message.saas_id;
            if (message.app_id != null && message.hasOwnProperty("app_id"))
                object.app_id = message.app_id;
            return object;
        };

        /**
         * Converts this AppIndex to JSON.
         * @function toJSON
         * @memberof app.AppIndex
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AppIndex.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AppIndex
         * @function getTypeUrl
         * @memberof app.AppIndex
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AppIndex.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/app.AppIndex";
        };

        return AppIndex;
    })();

    app.CreateAppRequest = (function() {

        /**
         * Properties of a CreateAppRequest.
         * @memberof app
         * @interface ICreateAppRequest
         * @property {auth.IAuthorization|null} [auth] CreateAppRequest auth
         * @property {number|null} [saas_id] CreateAppRequest saas_id
         * @property {string|null} [name] CreateAppRequest name
         */

        /**
         * Constructs a new CreateAppRequest.
         * @memberof app
         * @classdesc Represents a CreateAppRequest.
         * @implements ICreateAppRequest
         * @constructor
         * @param {app.ICreateAppRequest=} [properties] Properties to set
         */
        function CreateAppRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateAppRequest auth.
         * @member {auth.IAuthorization|null|undefined} auth
         * @memberof app.CreateAppRequest
         * @instance
         */
        CreateAppRequest.prototype.auth = null;

        /**
         * CreateAppRequest saas_id.
         * @member {number} saas_id
         * @memberof app.CreateAppRequest
         * @instance
         */
        CreateAppRequest.prototype.saas_id = 0;

        /**
         * CreateAppRequest name.
         * @member {string} name
         * @memberof app.CreateAppRequest
         * @instance
         */
        CreateAppRequest.prototype.name = "";

        /**
         * Creates a new CreateAppRequest instance using the specified properties.
         * @function create
         * @memberof app.CreateAppRequest
         * @static
         * @param {app.ICreateAppRequest=} [properties] Properties to set
         * @returns {app.CreateAppRequest} CreateAppRequest instance
         */
        CreateAppRequest.create = function create(properties) {
            return new CreateAppRequest(properties);
        };

        /**
         * Encodes the specified CreateAppRequest message. Does not implicitly {@link app.CreateAppRequest.verify|verify} messages.
         * @function encode
         * @memberof app.CreateAppRequest
         * @static
         * @param {app.ICreateAppRequest} message CreateAppRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateAppRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.auth != null && Object.hasOwnProperty.call(message, "auth"))
                $root.auth.Authorization.encode(message.auth, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.saas_id != null && Object.hasOwnProperty.call(message, "saas_id"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.saas_id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 20, wireType 2 =*/162).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified CreateAppRequest message, length delimited. Does not implicitly {@link app.CreateAppRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof app.CreateAppRequest
         * @static
         * @param {app.ICreateAppRequest} message CreateAppRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateAppRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateAppRequest message from the specified reader or buffer.
         * @function decode
         * @memberof app.CreateAppRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {app.CreateAppRequest} CreateAppRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateAppRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.CreateAppRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.auth = $root.auth.Authorization.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.saas_id = reader.uint32();
                        break;
                    }
                case 20: {
                        message.name = reader.string();
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
         * Decodes a CreateAppRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof app.CreateAppRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {app.CreateAppRequest} CreateAppRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateAppRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateAppRequest message.
         * @function verify
         * @memberof app.CreateAppRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateAppRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.auth != null && message.hasOwnProperty("auth")) {
                var error = $root.auth.Authorization.verify(message.auth);
                if (error)
                    return "auth." + error;
            }
            if (message.saas_id != null && message.hasOwnProperty("saas_id"))
                if (!$util.isInteger(message.saas_id))
                    return "saas_id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a CreateAppRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof app.CreateAppRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {app.CreateAppRequest} CreateAppRequest
         */
        CreateAppRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.app.CreateAppRequest)
                return object;
            var message = new $root.app.CreateAppRequest();
            if (object.auth != null) {
                if (typeof object.auth !== "object")
                    throw TypeError(".app.CreateAppRequest.auth: object expected");
                message.auth = $root.auth.Authorization.fromObject(object.auth);
            }
            if (object.saas_id != null)
                message.saas_id = object.saas_id >>> 0;
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a CreateAppRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof app.CreateAppRequest
         * @static
         * @param {app.CreateAppRequest} message CreateAppRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateAppRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.auth = null;
                object.saas_id = 0;
                object.name = "";
            }
            if (message.auth != null && message.hasOwnProperty("auth"))
                object.auth = $root.auth.Authorization.toObject(message.auth, options);
            if (message.saas_id != null && message.hasOwnProperty("saas_id"))
                object.saas_id = message.saas_id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this CreateAppRequest to JSON.
         * @function toJSON
         * @memberof app.CreateAppRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateAppRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateAppRequest
         * @function getTypeUrl
         * @memberof app.CreateAppRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateAppRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/app.CreateAppRequest";
        };

        return CreateAppRequest;
    })();

    app.UpdateAppRequest = (function() {

        /**
         * Properties of an UpdateAppRequest.
         * @memberof app
         * @interface IUpdateAppRequest
         * @property {auth.IAuthorization|null} [auth] UpdateAppRequest auth
         * @property {app.IAppIndex|null} [app] UpdateAppRequest app
         * @property {string|null} [name] UpdateAppRequest name
         */

        /**
         * Constructs a new UpdateAppRequest.
         * @memberof app
         * @classdesc Represents an UpdateAppRequest.
         * @implements IUpdateAppRequest
         * @constructor
         * @param {app.IUpdateAppRequest=} [properties] Properties to set
         */
        function UpdateAppRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateAppRequest auth.
         * @member {auth.IAuthorization|null|undefined} auth
         * @memberof app.UpdateAppRequest
         * @instance
         */
        UpdateAppRequest.prototype.auth = null;

        /**
         * UpdateAppRequest app.
         * @member {app.IAppIndex|null|undefined} app
         * @memberof app.UpdateAppRequest
         * @instance
         */
        UpdateAppRequest.prototype.app = null;

        /**
         * UpdateAppRequest name.
         * @member {string} name
         * @memberof app.UpdateAppRequest
         * @instance
         */
        UpdateAppRequest.prototype.name = "";

        /**
         * Creates a new UpdateAppRequest instance using the specified properties.
         * @function create
         * @memberof app.UpdateAppRequest
         * @static
         * @param {app.IUpdateAppRequest=} [properties] Properties to set
         * @returns {app.UpdateAppRequest} UpdateAppRequest instance
         */
        UpdateAppRequest.create = function create(properties) {
            return new UpdateAppRequest(properties);
        };

        /**
         * Encodes the specified UpdateAppRequest message. Does not implicitly {@link app.UpdateAppRequest.verify|verify} messages.
         * @function encode
         * @memberof app.UpdateAppRequest
         * @static
         * @param {app.IUpdateAppRequest} message UpdateAppRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateAppRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.auth != null && Object.hasOwnProperty.call(message, "auth"))
                $root.auth.Authorization.encode(message.auth, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.app != null && Object.hasOwnProperty.call(message, "app"))
                $root.app.AppIndex.encode(message.app, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 20, wireType 2 =*/162).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified UpdateAppRequest message, length delimited. Does not implicitly {@link app.UpdateAppRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof app.UpdateAppRequest
         * @static
         * @param {app.IUpdateAppRequest} message UpdateAppRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateAppRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateAppRequest message from the specified reader or buffer.
         * @function decode
         * @memberof app.UpdateAppRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {app.UpdateAppRequest} UpdateAppRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateAppRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.UpdateAppRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.auth = $root.auth.Authorization.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.app = $root.app.AppIndex.decode(reader, reader.uint32());
                        break;
                    }
                case 20: {
                        message.name = reader.string();
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
         * Decodes an UpdateAppRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof app.UpdateAppRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {app.UpdateAppRequest} UpdateAppRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateAppRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateAppRequest message.
         * @function verify
         * @memberof app.UpdateAppRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateAppRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.auth != null && message.hasOwnProperty("auth")) {
                var error = $root.auth.Authorization.verify(message.auth);
                if (error)
                    return "auth." + error;
            }
            if (message.app != null && message.hasOwnProperty("app")) {
                var error = $root.app.AppIndex.verify(message.app);
                if (error)
                    return "app." + error;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates an UpdateAppRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof app.UpdateAppRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {app.UpdateAppRequest} UpdateAppRequest
         */
        UpdateAppRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.app.UpdateAppRequest)
                return object;
            var message = new $root.app.UpdateAppRequest();
            if (object.auth != null) {
                if (typeof object.auth !== "object")
                    throw TypeError(".app.UpdateAppRequest.auth: object expected");
                message.auth = $root.auth.Authorization.fromObject(object.auth);
            }
            if (object.app != null) {
                if (typeof object.app !== "object")
                    throw TypeError(".app.UpdateAppRequest.app: object expected");
                message.app = $root.app.AppIndex.fromObject(object.app);
            }
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from an UpdateAppRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof app.UpdateAppRequest
         * @static
         * @param {app.UpdateAppRequest} message UpdateAppRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateAppRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.auth = null;
                object.app = null;
                object.name = "";
            }
            if (message.auth != null && message.hasOwnProperty("auth"))
                object.auth = $root.auth.Authorization.toObject(message.auth, options);
            if (message.app != null && message.hasOwnProperty("app"))
                object.app = $root.app.AppIndex.toObject(message.app, options);
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this UpdateAppRequest to JSON.
         * @function toJSON
         * @memberof app.UpdateAppRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateAppRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpdateAppRequest
         * @function getTypeUrl
         * @memberof app.UpdateAppRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpdateAppRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/app.UpdateAppRequest";
        };

        return UpdateAppRequest;
    })();

    app.GetAppsRequest = (function() {

        /**
         * Properties of a GetAppsRequest.
         * @memberof app
         * @interface IGetAppsRequest
         * @property {number|null} [user_id] GetAppsRequest user_id
         * @property {number|null} [saas_id] GetAppsRequest saas_id
         */

        /**
         * Constructs a new GetAppsRequest.
         * @memberof app
         * @classdesc Represents a GetAppsRequest.
         * @implements IGetAppsRequest
         * @constructor
         * @param {app.IGetAppsRequest=} [properties] Properties to set
         */
        function GetAppsRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetAppsRequest user_id.
         * @member {number} user_id
         * @memberof app.GetAppsRequest
         * @instance
         */
        GetAppsRequest.prototype.user_id = 0;

        /**
         * GetAppsRequest saas_id.
         * @member {number} saas_id
         * @memberof app.GetAppsRequest
         * @instance
         */
        GetAppsRequest.prototype.saas_id = 0;

        /**
         * Creates a new GetAppsRequest instance using the specified properties.
         * @function create
         * @memberof app.GetAppsRequest
         * @static
         * @param {app.IGetAppsRequest=} [properties] Properties to set
         * @returns {app.GetAppsRequest} GetAppsRequest instance
         */
        GetAppsRequest.create = function create(properties) {
            return new GetAppsRequest(properties);
        };

        /**
         * Encodes the specified GetAppsRequest message. Does not implicitly {@link app.GetAppsRequest.verify|verify} messages.
         * @function encode
         * @memberof app.GetAppsRequest
         * @static
         * @param {app.IGetAppsRequest} message GetAppsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAppsRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user_id != null && Object.hasOwnProperty.call(message, "user_id"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.user_id);
            if (message.saas_id != null && Object.hasOwnProperty.call(message, "saas_id"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.saas_id);
            return writer;
        };

        /**
         * Encodes the specified GetAppsRequest message, length delimited. Does not implicitly {@link app.GetAppsRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof app.GetAppsRequest
         * @static
         * @param {app.IGetAppsRequest} message GetAppsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAppsRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetAppsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof app.GetAppsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {app.GetAppsRequest} GetAppsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAppsRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.GetAppsRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 10: {
                        message.user_id = reader.uint32();
                        break;
                    }
                case 11: {
                        message.saas_id = reader.uint32();
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
         * Decodes a GetAppsRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof app.GetAppsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {app.GetAppsRequest} GetAppsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAppsRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetAppsRequest message.
         * @function verify
         * @memberof app.GetAppsRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetAppsRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                if (!$util.isInteger(message.user_id))
                    return "user_id: integer expected";
            if (message.saas_id != null && message.hasOwnProperty("saas_id"))
                if (!$util.isInteger(message.saas_id))
                    return "saas_id: integer expected";
            return null;
        };

        /**
         * Creates a GetAppsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof app.GetAppsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {app.GetAppsRequest} GetAppsRequest
         */
        GetAppsRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.app.GetAppsRequest)
                return object;
            var message = new $root.app.GetAppsRequest();
            if (object.user_id != null)
                message.user_id = object.user_id >>> 0;
            if (object.saas_id != null)
                message.saas_id = object.saas_id >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a GetAppsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof app.GetAppsRequest
         * @static
         * @param {app.GetAppsRequest} message GetAppsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetAppsRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.user_id = 0;
                object.saas_id = 0;
            }
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                object.user_id = message.user_id;
            if (message.saas_id != null && message.hasOwnProperty("saas_id"))
                object.saas_id = message.saas_id;
            return object;
        };

        /**
         * Converts this GetAppsRequest to JSON.
         * @function toJSON
         * @memberof app.GetAppsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetAppsRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetAppsRequest
         * @function getTypeUrl
         * @memberof app.GetAppsRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetAppsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/app.GetAppsRequest";
        };

        return GetAppsRequest;
    })();

    app.App = (function() {

        /**
         * Properties of an App.
         * @memberof app
         * @interface IApp
         * @property {number|null} [saas_id] App saas_id
         * @property {number|null} [app_id] App app_id
         * @property {string|null} [name] App name
         */

        /**
         * Constructs a new App.
         * @memberof app
         * @classdesc Represents an App.
         * @implements IApp
         * @constructor
         * @param {app.IApp=} [properties] Properties to set
         */
        function App(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * App saas_id.
         * @member {number} saas_id
         * @memberof app.App
         * @instance
         */
        App.prototype.saas_id = 0;

        /**
         * App app_id.
         * @member {number} app_id
         * @memberof app.App
         * @instance
         */
        App.prototype.app_id = 0;

        /**
         * App name.
         * @member {string} name
         * @memberof app.App
         * @instance
         */
        App.prototype.name = "";

        /**
         * Creates a new App instance using the specified properties.
         * @function create
         * @memberof app.App
         * @static
         * @param {app.IApp=} [properties] Properties to set
         * @returns {app.App} App instance
         */
        App.create = function create(properties) {
            return new App(properties);
        };

        /**
         * Encodes the specified App message. Does not implicitly {@link app.App.verify|verify} messages.
         * @function encode
         * @memberof app.App
         * @static
         * @param {app.IApp} message App message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        App.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.saas_id != null && Object.hasOwnProperty.call(message, "saas_id"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.saas_id);
            if (message.app_id != null && Object.hasOwnProperty.call(message, "app_id"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.app_id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 20, wireType 2 =*/162).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified App message, length delimited. Does not implicitly {@link app.App.verify|verify} messages.
         * @function encodeDelimited
         * @memberof app.App
         * @static
         * @param {app.IApp} message App message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        App.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an App message from the specified reader or buffer.
         * @function decode
         * @memberof app.App
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {app.App} App
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        App.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.App();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 11: {
                        message.saas_id = reader.uint32();
                        break;
                    }
                case 12: {
                        message.app_id = reader.uint32();
                        break;
                    }
                case 20: {
                        message.name = reader.string();
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
         * Decodes an App message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof app.App
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {app.App} App
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        App.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an App message.
         * @function verify
         * @memberof app.App
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        App.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.saas_id != null && message.hasOwnProperty("saas_id"))
                if (!$util.isInteger(message.saas_id))
                    return "saas_id: integer expected";
            if (message.app_id != null && message.hasOwnProperty("app_id"))
                if (!$util.isInteger(message.app_id))
                    return "app_id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates an App message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof app.App
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {app.App} App
         */
        App.fromObject = function fromObject(object) {
            if (object instanceof $root.app.App)
                return object;
            var message = new $root.app.App();
            if (object.saas_id != null)
                message.saas_id = object.saas_id >>> 0;
            if (object.app_id != null)
                message.app_id = object.app_id >>> 0;
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from an App message. Also converts values to other types if specified.
         * @function toObject
         * @memberof app.App
         * @static
         * @param {app.App} message App
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        App.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.saas_id = 0;
                object.app_id = 0;
                object.name = "";
            }
            if (message.saas_id != null && message.hasOwnProperty("saas_id"))
                object.saas_id = message.saas_id;
            if (message.app_id != null && message.hasOwnProperty("app_id"))
                object.app_id = message.app_id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this App to JSON.
         * @function toJSON
         * @memberof app.App
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        App.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for App
         * @function getTypeUrl
         * @memberof app.App
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        App.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/app.App";
        };

        return App;
    })();

    app.GetAppsResponse = (function() {

        /**
         * Properties of a GetAppsResponse.
         * @memberof app
         * @interface IGetAppsResponse
         * @property {Array.<app.IApp>|null} [apps] GetAppsResponse apps
         */

        /**
         * Constructs a new GetAppsResponse.
         * @memberof app
         * @classdesc Represents a GetAppsResponse.
         * @implements IGetAppsResponse
         * @constructor
         * @param {app.IGetAppsResponse=} [properties] Properties to set
         */
        function GetAppsResponse(properties) {
            this.apps = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetAppsResponse apps.
         * @member {Array.<app.IApp>} apps
         * @memberof app.GetAppsResponse
         * @instance
         */
        GetAppsResponse.prototype.apps = $util.emptyArray;

        /**
         * Creates a new GetAppsResponse instance using the specified properties.
         * @function create
         * @memberof app.GetAppsResponse
         * @static
         * @param {app.IGetAppsResponse=} [properties] Properties to set
         * @returns {app.GetAppsResponse} GetAppsResponse instance
         */
        GetAppsResponse.create = function create(properties) {
            return new GetAppsResponse(properties);
        };

        /**
         * Encodes the specified GetAppsResponse message. Does not implicitly {@link app.GetAppsResponse.verify|verify} messages.
         * @function encode
         * @memberof app.GetAppsResponse
         * @static
         * @param {app.IGetAppsResponse} message GetAppsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAppsResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.apps != null && message.apps.length)
                for (var i = 0; i < message.apps.length; ++i)
                    $root.app.App.encode(message.apps[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetAppsResponse message, length delimited. Does not implicitly {@link app.GetAppsResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof app.GetAppsResponse
         * @static
         * @param {app.IGetAppsResponse} message GetAppsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAppsResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetAppsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof app.GetAppsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {app.GetAppsResponse} GetAppsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAppsResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.GetAppsResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 11: {
                        if (!(message.apps && message.apps.length))
                            message.apps = [];
                        message.apps.push($root.app.App.decode(reader, reader.uint32()));
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
         * Decodes a GetAppsResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof app.GetAppsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {app.GetAppsResponse} GetAppsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAppsResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetAppsResponse message.
         * @function verify
         * @memberof app.GetAppsResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetAppsResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.apps != null && message.hasOwnProperty("apps")) {
                if (!Array.isArray(message.apps))
                    return "apps: array expected";
                for (var i = 0; i < message.apps.length; ++i) {
                    var error = $root.app.App.verify(message.apps[i]);
                    if (error)
                        return "apps." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetAppsResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof app.GetAppsResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {app.GetAppsResponse} GetAppsResponse
         */
        GetAppsResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.app.GetAppsResponse)
                return object;
            var message = new $root.app.GetAppsResponse();
            if (object.apps) {
                if (!Array.isArray(object.apps))
                    throw TypeError(".app.GetAppsResponse.apps: array expected");
                message.apps = [];
                for (var i = 0; i < object.apps.length; ++i) {
                    if (typeof object.apps[i] !== "object")
                        throw TypeError(".app.GetAppsResponse.apps: object expected");
                    message.apps[i] = $root.app.App.fromObject(object.apps[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetAppsResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof app.GetAppsResponse
         * @static
         * @param {app.GetAppsResponse} message GetAppsResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetAppsResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.apps = [];
            if (message.apps && message.apps.length) {
                object.apps = [];
                for (var j = 0; j < message.apps.length; ++j)
                    object.apps[j] = $root.app.App.toObject(message.apps[j], options);
            }
            return object;
        };

        /**
         * Converts this GetAppsResponse to JSON.
         * @function toJSON
         * @memberof app.GetAppsResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetAppsResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetAppsResponse
         * @function getTypeUrl
         * @memberof app.GetAppsResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetAppsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/app.GetAppsResponse";
        };

        return GetAppsResponse;
    })();

    app.AppService = (function() {

        /**
         * Constructs a new AppService service.
         * @memberof app
         * @classdesc Represents an AppService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function AppService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (AppService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = AppService;

        /**
         * Creates new AppService service using the specified rpc implementation.
         * @function create
         * @memberof app.AppService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {AppService} RPC service. Useful where requests and/or responses are streamed.
         */
        AppService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link app.AppService#createApp}.
         * @memberof app.AppService
         * @typedef CreateAppCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {app.AppIndex} [response] AppIndex
         */

        /**
         * Calls CreateApp.
         * @function createApp
         * @memberof app.AppService
         * @instance
         * @param {app.ICreateAppRequest} request CreateAppRequest message or plain object
         * @param {app.AppService.CreateAppCallback} callback Node-style callback called with the error, if any, and AppIndex
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AppService.prototype.createApp = function createApp(request, callback) {
            return this.rpcCall(createApp, $root.app.CreateAppRequest, $root.app.AppIndex, request, callback);
        }, "name", { value: "CreateApp" });

        /**
         * Calls CreateApp.
         * @function createApp
         * @memberof app.AppService
         * @instance
         * @param {app.ICreateAppRequest} request CreateAppRequest message or plain object
         * @returns {Promise<app.AppIndex>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link app.AppService#updateApp}.
         * @memberof app.AppService
         * @typedef UpdateAppCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {common.Empty} [response] Empty
         */

        /**
         * Calls UpdateApp.
         * @function updateApp
         * @memberof app.AppService
         * @instance
         * @param {app.IUpdateAppRequest} request UpdateAppRequest message or plain object
         * @param {app.AppService.UpdateAppCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AppService.prototype.updateApp = function updateApp(request, callback) {
            return this.rpcCall(updateApp, $root.app.UpdateAppRequest, $root.common.Empty, request, callback);
        }, "name", { value: "UpdateApp" });

        /**
         * Calls UpdateApp.
         * @function updateApp
         * @memberof app.AppService
         * @instance
         * @param {app.IUpdateAppRequest} request UpdateAppRequest message or plain object
         * @returns {Promise<common.Empty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link app.AppService#getApps}.
         * @memberof app.AppService
         * @typedef GetAppsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {app.GetAppsResponse} [response] GetAppsResponse
         */

        /**
         * Calls GetApps.
         * @function getApps
         * @memberof app.AppService
         * @instance
         * @param {app.IGetAppsRequest} request GetAppsRequest message or plain object
         * @param {app.AppService.GetAppsCallback} callback Node-style callback called with the error, if any, and GetAppsResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AppService.prototype.getApps = function getApps(request, callback) {
            return this.rpcCall(getApps, $root.app.GetAppsRequest, $root.app.GetAppsResponse, request, callback);
        }, "name", { value: "GetApps" });

        /**
         * Calls GetApps.
         * @function getApps
         * @memberof app.AppService
         * @instance
         * @param {app.IGetAppsRequest} request GetAppsRequest message or plain object
         * @returns {Promise<app.GetAppsResponse>} Promise
         * @variation 2
         */

        return AppService;
    })();

    return app;
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
        Empty.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Empty();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
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

    /**
     * Platform enum.
     * @name common.Platform
     * @enum {number}
     * @property {number} UNKNOWN=0 UNKNOWN value
     * @property {number} WEB=1 WEB value
     * @property {number} APP=2 APP value
     * @property {number} WECHAT_MP=11 WECHAT_MP value
     * @property {number} WECHAT_APP=12 WECHAT_APP value
     */
    common.Platform = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN"] = 0;
        values[valuesById[1] = "WEB"] = 1;
        values[valuesById[2] = "APP"] = 2;
        values[valuesById[11] = "WECHAT_MP"] = 11;
        values[valuesById[12] = "WECHAT_APP"] = 12;
        return values;
    })();

    common.SubscribeRequest = (function() {

        /**
         * Properties of a SubscribeRequest.
         * @memberof common
         * @interface ISubscribeRequest
         * @property {number|Long|null} [interval_min] SubscribeRequest interval_min
         * @property {number|Long|null} [interval_max] SubscribeRequest interval_max
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
         * SubscribeRequest interval_min.
         * @member {number|Long} interval_min
         * @memberof common.SubscribeRequest
         * @instance
         */
        SubscribeRequest.prototype.interval_min = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * SubscribeRequest interval_max.
         * @member {number|Long} interval_max
         * @memberof common.SubscribeRequest
         * @instance
         */
        SubscribeRequest.prototype.interval_max = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

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
            if (message.interval_min != null && Object.hasOwnProperty.call(message, "interval_min"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint64(message.interval_min);
            if (message.interval_max != null && Object.hasOwnProperty.call(message, "interval_max"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint64(message.interval_max);
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
        SubscribeRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.SubscribeRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 11: {
                        message.interval_min = reader.uint64();
                        break;
                    }
                case 12: {
                        message.interval_max = reader.uint64();
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
            if (message.interval_min != null && message.hasOwnProperty("interval_min"))
                if (!$util.isInteger(message.interval_min) && !(message.interval_min && $util.isInteger(message.interval_min.low) && $util.isInteger(message.interval_min.high)))
                    return "interval_min: integer|Long expected";
            if (message.interval_max != null && message.hasOwnProperty("interval_max"))
                if (!$util.isInteger(message.interval_max) && !(message.interval_max && $util.isInteger(message.interval_max.low) && $util.isInteger(message.interval_max.high)))
                    return "interval_max: integer|Long expected";
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
            if (object.interval_min != null)
                if ($util.Long)
                    (message.interval_min = $util.Long.fromValue(object.interval_min)).unsigned = true;
                else if (typeof object.interval_min === "string")
                    message.interval_min = parseInt(object.interval_min, 10);
                else if (typeof object.interval_min === "number")
                    message.interval_min = object.interval_min;
                else if (typeof object.interval_min === "object")
                    message.interval_min = new $util.LongBits(object.interval_min.low >>> 0, object.interval_min.high >>> 0).toNumber(true);
            if (object.interval_max != null)
                if ($util.Long)
                    (message.interval_max = $util.Long.fromValue(object.interval_max)).unsigned = true;
                else if (typeof object.interval_max === "string")
                    message.interval_max = parseInt(object.interval_max, 10);
                else if (typeof object.interval_max === "number")
                    message.interval_max = object.interval_max;
                else if (typeof object.interval_max === "object")
                    message.interval_max = new $util.LongBits(object.interval_max.low >>> 0, object.interval_max.high >>> 0).toNumber(true);
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
                    object.interval_min = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.interval_min = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.interval_max = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.interval_max = options.longs === String ? "0" : 0;
            }
            if (message.interval_min != null && message.hasOwnProperty("interval_min"))
                if (typeof message.interval_min === "number")
                    object.interval_min = options.longs === String ? String(message.interval_min) : message.interval_min;
                else
                    object.interval_min = options.longs === String ? $util.Long.prototype.toString.call(message.interval_min) : options.longs === Number ? new $util.LongBits(message.interval_min.low >>> 0, message.interval_min.high >>> 0).toNumber(true) : message.interval_min;
            if (message.interval_max != null && message.hasOwnProperty("interval_max"))
                if (typeof message.interval_max === "number")
                    object.interval_max = options.longs === String ? String(message.interval_max) : message.interval_max;
                else
                    object.interval_max = options.longs === String ? $util.Long.prototype.toString.call(message.interval_max) : options.longs === Number ? new $util.LongBits(message.interval_max.low >>> 0, message.interval_max.high >>> 0).toNumber(true) : message.interval_max;
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
        Authorization.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.Authorization();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
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

    auth.AuthData = (function() {

        /**
         * Properties of an AuthData.
         * @memberof auth
         * @interface IAuthData
         * @property {auth.IAuthorization|null} [auth] AuthData auth
         */

        /**
         * Constructs a new AuthData.
         * @memberof auth
         * @classdesc Represents an AuthData.
         * @implements IAuthData
         * @constructor
         * @param {auth.IAuthData=} [properties] Properties to set
         */
        function AuthData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AuthData auth.
         * @member {auth.IAuthorization|null|undefined} auth
         * @memberof auth.AuthData
         * @instance
         */
        AuthData.prototype.auth = null;

        /**
         * Creates a new AuthData instance using the specified properties.
         * @function create
         * @memberof auth.AuthData
         * @static
         * @param {auth.IAuthData=} [properties] Properties to set
         * @returns {auth.AuthData} AuthData instance
         */
        AuthData.create = function create(properties) {
            return new AuthData(properties);
        };

        /**
         * Encodes the specified AuthData message. Does not implicitly {@link auth.AuthData.verify|verify} messages.
         * @function encode
         * @memberof auth.AuthData
         * @static
         * @param {auth.IAuthData} message AuthData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.auth != null && Object.hasOwnProperty.call(message, "auth"))
                $root.auth.Authorization.encode(message.auth, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AuthData message, length delimited. Does not implicitly {@link auth.AuthData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof auth.AuthData
         * @static
         * @param {auth.IAuthData} message AuthData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AuthData message from the specified reader or buffer.
         * @function decode
         * @memberof auth.AuthData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.AuthData} AuthData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthData.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.AuthData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
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
         * Decodes an AuthData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof auth.AuthData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {auth.AuthData} AuthData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AuthData message.
         * @function verify
         * @memberof auth.AuthData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AuthData.verify = function verify(message) {
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
         * Creates an AuthData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof auth.AuthData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {auth.AuthData} AuthData
         */
        AuthData.fromObject = function fromObject(object) {
            if (object instanceof $root.auth.AuthData)
                return object;
            var message = new $root.auth.AuthData();
            if (object.auth != null) {
                if (typeof object.auth !== "object")
                    throw TypeError(".auth.AuthData.auth: object expected");
                message.auth = $root.auth.Authorization.fromObject(object.auth);
            }
            return message;
        };

        /**
         * Creates a plain object from an AuthData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof auth.AuthData
         * @static
         * @param {auth.AuthData} message AuthData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AuthData.toObject = function toObject(message, options) {
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
         * Converts this AuthData to JSON.
         * @function toJSON
         * @memberof auth.AuthData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AuthData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AuthData
         * @function getTypeUrl
         * @memberof auth.AuthData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AuthData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/auth.AuthData";
        };

        return AuthData;
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
        RefreshAuthRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.RefreshAuthRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
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

$root.captcha = (function() {

    /**
     * Namespace captcha.
     * @exports captcha
     * @namespace
     */
    var captcha = {};

    captcha.CreateCaptchaRequest = (function() {

        /**
         * Properties of a CreateCaptchaRequest.
         * @memberof captcha
         * @interface ICreateCaptchaRequest
         * @property {number|null} [height] CreateCaptchaRequest height
         * @property {number|null} [width] CreateCaptchaRequest width
         */

        /**
         * Constructs a new CreateCaptchaRequest.
         * @memberof captcha
         * @classdesc Represents a CreateCaptchaRequest.
         * @implements ICreateCaptchaRequest
         * @constructor
         * @param {captcha.ICreateCaptchaRequest=} [properties] Properties to set
         */
        function CreateCaptchaRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateCaptchaRequest height.
         * @member {number} height
         * @memberof captcha.CreateCaptchaRequest
         * @instance
         */
        CreateCaptchaRequest.prototype.height = 0;

        /**
         * CreateCaptchaRequest width.
         * @member {number} width
         * @memberof captcha.CreateCaptchaRequest
         * @instance
         */
        CreateCaptchaRequest.prototype.width = 0;

        /**
         * Creates a new CreateCaptchaRequest instance using the specified properties.
         * @function create
         * @memberof captcha.CreateCaptchaRequest
         * @static
         * @param {captcha.ICreateCaptchaRequest=} [properties] Properties to set
         * @returns {captcha.CreateCaptchaRequest} CreateCaptchaRequest instance
         */
        CreateCaptchaRequest.create = function create(properties) {
            return new CreateCaptchaRequest(properties);
        };

        /**
         * Encodes the specified CreateCaptchaRequest message. Does not implicitly {@link captcha.CreateCaptchaRequest.verify|verify} messages.
         * @function encode
         * @memberof captcha.CreateCaptchaRequest
         * @static
         * @param {captcha.ICreateCaptchaRequest} message CreateCaptchaRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateCaptchaRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 21, wireType 0 =*/168).uint32(message.height);
            if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                writer.uint32(/* id 22, wireType 0 =*/176).uint32(message.width);
            return writer;
        };

        /**
         * Encodes the specified CreateCaptchaRequest message, length delimited. Does not implicitly {@link captcha.CreateCaptchaRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof captcha.CreateCaptchaRequest
         * @static
         * @param {captcha.ICreateCaptchaRequest} message CreateCaptchaRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateCaptchaRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateCaptchaRequest message from the specified reader or buffer.
         * @function decode
         * @memberof captcha.CreateCaptchaRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {captcha.CreateCaptchaRequest} CreateCaptchaRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateCaptchaRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.captcha.CreateCaptchaRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 21: {
                        message.height = reader.uint32();
                        break;
                    }
                case 22: {
                        message.width = reader.uint32();
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
         * Decodes a CreateCaptchaRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof captcha.CreateCaptchaRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {captcha.CreateCaptchaRequest} CreateCaptchaRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateCaptchaRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateCaptchaRequest message.
         * @function verify
         * @memberof captcha.CreateCaptchaRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateCaptchaRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height))
                    return "height: integer expected";
            if (message.width != null && message.hasOwnProperty("width"))
                if (!$util.isInteger(message.width))
                    return "width: integer expected";
            return null;
        };

        /**
         * Creates a CreateCaptchaRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof captcha.CreateCaptchaRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {captcha.CreateCaptchaRequest} CreateCaptchaRequest
         */
        CreateCaptchaRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.captcha.CreateCaptchaRequest)
                return object;
            var message = new $root.captcha.CreateCaptchaRequest();
            if (object.height != null)
                message.height = object.height >>> 0;
            if (object.width != null)
                message.width = object.width >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a CreateCaptchaRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof captcha.CreateCaptchaRequest
         * @static
         * @param {captcha.CreateCaptchaRequest} message CreateCaptchaRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateCaptchaRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.height = 0;
                object.width = 0;
            }
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = message.height;
            if (message.width != null && message.hasOwnProperty("width"))
                object.width = message.width;
            return object;
        };

        /**
         * Converts this CreateCaptchaRequest to JSON.
         * @function toJSON
         * @memberof captcha.CreateCaptchaRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateCaptchaRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateCaptchaRequest
         * @function getTypeUrl
         * @memberof captcha.CreateCaptchaRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateCaptchaRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/captcha.CreateCaptchaRequest";
        };

        return CreateCaptchaRequest;
    })();

    captcha.CreateCaptchaResponse = (function() {

        /**
         * Properties of a CreateCaptchaResponse.
         * @memberof captcha
         * @interface ICreateCaptchaResponse
         * @property {string|null} [id] CreateCaptchaResponse id
         * @property {string|null} [path] CreateCaptchaResponse path
         */

        /**
         * Constructs a new CreateCaptchaResponse.
         * @memberof captcha
         * @classdesc Represents a CreateCaptchaResponse.
         * @implements ICreateCaptchaResponse
         * @constructor
         * @param {captcha.ICreateCaptchaResponse=} [properties] Properties to set
         */
        function CreateCaptchaResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateCaptchaResponse id.
         * @member {string} id
         * @memberof captcha.CreateCaptchaResponse
         * @instance
         */
        CreateCaptchaResponse.prototype.id = "";

        /**
         * CreateCaptchaResponse path.
         * @member {string} path
         * @memberof captcha.CreateCaptchaResponse
         * @instance
         */
        CreateCaptchaResponse.prototype.path = "";

        /**
         * Creates a new CreateCaptchaResponse instance using the specified properties.
         * @function create
         * @memberof captcha.CreateCaptchaResponse
         * @static
         * @param {captcha.ICreateCaptchaResponse=} [properties] Properties to set
         * @returns {captcha.CreateCaptchaResponse} CreateCaptchaResponse instance
         */
        CreateCaptchaResponse.create = function create(properties) {
            return new CreateCaptchaResponse(properties);
        };

        /**
         * Encodes the specified CreateCaptchaResponse message. Does not implicitly {@link captcha.CreateCaptchaResponse.verify|verify} messages.
         * @function encode
         * @memberof captcha.CreateCaptchaResponse
         * @static
         * @param {captcha.ICreateCaptchaResponse} message CreateCaptchaResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateCaptchaResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.id);
            if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.path);
            return writer;
        };

        /**
         * Encodes the specified CreateCaptchaResponse message, length delimited. Does not implicitly {@link captcha.CreateCaptchaResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof captcha.CreateCaptchaResponse
         * @static
         * @param {captcha.ICreateCaptchaResponse} message CreateCaptchaResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateCaptchaResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateCaptchaResponse message from the specified reader or buffer.
         * @function decode
         * @memberof captcha.CreateCaptchaResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {captcha.CreateCaptchaResponse} CreateCaptchaResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateCaptchaResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.captcha.CreateCaptchaResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 11: {
                        message.id = reader.string();
                        break;
                    }
                case 12: {
                        message.path = reader.string();
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
         * Decodes a CreateCaptchaResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof captcha.CreateCaptchaResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {captcha.CreateCaptchaResponse} CreateCaptchaResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateCaptchaResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateCaptchaResponse message.
         * @function verify
         * @memberof captcha.CreateCaptchaResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateCaptchaResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.path != null && message.hasOwnProperty("path"))
                if (!$util.isString(message.path))
                    return "path: string expected";
            return null;
        };

        /**
         * Creates a CreateCaptchaResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof captcha.CreateCaptchaResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {captcha.CreateCaptchaResponse} CreateCaptchaResponse
         */
        CreateCaptchaResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.captcha.CreateCaptchaResponse)
                return object;
            var message = new $root.captcha.CreateCaptchaResponse();
            if (object.id != null)
                message.id = String(object.id);
            if (object.path != null)
                message.path = String(object.path);
            return message;
        };

        /**
         * Creates a plain object from a CreateCaptchaResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof captcha.CreateCaptchaResponse
         * @static
         * @param {captcha.CreateCaptchaResponse} message CreateCaptchaResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateCaptchaResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.path = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.path != null && message.hasOwnProperty("path"))
                object.path = message.path;
            return object;
        };

        /**
         * Converts this CreateCaptchaResponse to JSON.
         * @function toJSON
         * @memberof captcha.CreateCaptchaResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateCaptchaResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateCaptchaResponse
         * @function getTypeUrl
         * @memberof captcha.CreateCaptchaResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateCaptchaResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/captcha.CreateCaptchaResponse";
        };

        return CreateCaptchaResponse;
    })();

    captcha.CheckCaptcha = (function() {

        /**
         * Properties of a CheckCaptcha.
         * @memberof captcha
         * @interface ICheckCaptcha
         * @property {string|null} [id] CheckCaptcha id
         * @property {string|null} [value] CheckCaptcha value
         */

        /**
         * Constructs a new CheckCaptcha.
         * @memberof captcha
         * @classdesc Represents a CheckCaptcha.
         * @implements ICheckCaptcha
         * @constructor
         * @param {captcha.ICheckCaptcha=} [properties] Properties to set
         */
        function CheckCaptcha(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CheckCaptcha id.
         * @member {string} id
         * @memberof captcha.CheckCaptcha
         * @instance
         */
        CheckCaptcha.prototype.id = "";

        /**
         * CheckCaptcha value.
         * @member {string} value
         * @memberof captcha.CheckCaptcha
         * @instance
         */
        CheckCaptcha.prototype.value = "";

        /**
         * Creates a new CheckCaptcha instance using the specified properties.
         * @function create
         * @memberof captcha.CheckCaptcha
         * @static
         * @param {captcha.ICheckCaptcha=} [properties] Properties to set
         * @returns {captcha.CheckCaptcha} CheckCaptcha instance
         */
        CheckCaptcha.create = function create(properties) {
            return new CheckCaptcha(properties);
        };

        /**
         * Encodes the specified CheckCaptcha message. Does not implicitly {@link captcha.CheckCaptcha.verify|verify} messages.
         * @function encode
         * @memberof captcha.CheckCaptcha
         * @static
         * @param {captcha.ICheckCaptcha} message CheckCaptcha message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckCaptcha.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.id);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.value);
            return writer;
        };

        /**
         * Encodes the specified CheckCaptcha message, length delimited. Does not implicitly {@link captcha.CheckCaptcha.verify|verify} messages.
         * @function encodeDelimited
         * @memberof captcha.CheckCaptcha
         * @static
         * @param {captcha.ICheckCaptcha} message CheckCaptcha message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckCaptcha.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CheckCaptcha message from the specified reader or buffer.
         * @function decode
         * @memberof captcha.CheckCaptcha
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {captcha.CheckCaptcha} CheckCaptcha
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckCaptcha.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.captcha.CheckCaptcha();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 11: {
                        message.id = reader.string();
                        break;
                    }
                case 13: {
                        message.value = reader.string();
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
         * Decodes a CheckCaptcha message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof captcha.CheckCaptcha
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {captcha.CheckCaptcha} CheckCaptcha
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckCaptcha.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CheckCaptcha message.
         * @function verify
         * @memberof captcha.CheckCaptcha
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CheckCaptcha.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            return null;
        };

        /**
         * Creates a CheckCaptcha message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof captcha.CheckCaptcha
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {captcha.CheckCaptcha} CheckCaptcha
         */
        CheckCaptcha.fromObject = function fromObject(object) {
            if (object instanceof $root.captcha.CheckCaptcha)
                return object;
            var message = new $root.captcha.CheckCaptcha();
            if (object.id != null)
                message.id = String(object.id);
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };

        /**
         * Creates a plain object from a CheckCaptcha message. Also converts values to other types if specified.
         * @function toObject
         * @memberof captcha.CheckCaptcha
         * @static
         * @param {captcha.CheckCaptcha} message CheckCaptcha
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CheckCaptcha.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.value = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this CheckCaptcha to JSON.
         * @function toJSON
         * @memberof captcha.CheckCaptcha
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CheckCaptcha.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CheckCaptcha
         * @function getTypeUrl
         * @memberof captcha.CheckCaptcha
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CheckCaptcha.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/captcha.CheckCaptcha";
        };

        return CheckCaptcha;
    })();

    captcha.CaptchaService = (function() {

        /**
         * Constructs a new CaptchaService service.
         * @memberof captcha
         * @classdesc Represents a CaptchaService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function CaptchaService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (CaptchaService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = CaptchaService;

        /**
         * Creates new CaptchaService service using the specified rpc implementation.
         * @function create
         * @memberof captcha.CaptchaService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {CaptchaService} RPC service. Useful where requests and/or responses are streamed.
         */
        CaptchaService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link captcha.CaptchaService#createCaptcha}.
         * @memberof captcha.CaptchaService
         * @typedef CreateCaptchaCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {captcha.CreateCaptchaResponse} [response] CreateCaptchaResponse
         */

        /**
         * Calls CreateCaptcha.
         * @function createCaptcha
         * @memberof captcha.CaptchaService
         * @instance
         * @param {captcha.ICreateCaptchaRequest} request CreateCaptchaRequest message or plain object
         * @param {captcha.CaptchaService.CreateCaptchaCallback} callback Node-style callback called with the error, if any, and CreateCaptchaResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CaptchaService.prototype.createCaptcha = function createCaptcha(request, callback) {
            return this.rpcCall(createCaptcha, $root.captcha.CreateCaptchaRequest, $root.captcha.CreateCaptchaResponse, request, callback);
        }, "name", { value: "CreateCaptcha" });

        /**
         * Calls CreateCaptcha.
         * @function createCaptcha
         * @memberof captcha.CaptchaService
         * @instance
         * @param {captcha.ICreateCaptchaRequest} request CreateCaptchaRequest message or plain object
         * @returns {Promise<captcha.CreateCaptchaResponse>} Promise
         * @variation 2
         */

        return CaptchaService;
    })();

    return captcha;
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
     * @property {number} SERDE_ERR=1002 SERDE_ERR value
     * @property {number} CAPTCHA_ERR=1003 CAPTCHA_ERR value
     * @property {number} NOT_SIGNUP=2001 NOT_SIGNUP value
     * @property {number} NONE_PASSWD=2002 NONE_PASSWD value
     * @property {number} PASSWD_ERR=2003 PASSWD_ERR value
     * @property {number} INVALID_THREE=2005 INVALID_THREE value
     * @property {number} THREE_ERR=2006 THREE_ERR value
     * @property {number} INVALID_AUTH=2011 INVALID_AUTH value
     * @property {number} EXPIRED_AUTH=2012 EXPIRED_AUTH value
     * @property {number} EXPIRED_AUTH_SN=2013 EXPIRED_AUTH_SN value
     * @property {number} INVALID_APP=2018 INVALID_APP value
     * @property {number} NOT_BIND_THREE=2019 NOT_BIND_THREE value
     * @property {number} PERMISSION_DENIED=2021 PERMISSION_DENIED value
     * @property {number} NOT_FOUND=4004 NOT_FOUND value
     * @property {number} QuantityLimit=4005 QuantityLimit value
     * @property {number} COMMON_ERR=7000 COMMON_ERR value
     * @property {number} DB_ERR=7001 DB_ERR value
     * @property {number} IO_ERR=7101 IO_ERR value
     * @property {number} WX_ERR=8001 WX_ERR value
     */
    error_code.ErrorCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SUCCESS"] = 0;
        values[valuesById[1001] = "INVALID_INPUT"] = 1001;
        values[valuesById[1002] = "SERDE_ERR"] = 1002;
        values[valuesById[1003] = "CAPTCHA_ERR"] = 1003;
        values[valuesById[2001] = "NOT_SIGNUP"] = 2001;
        values[valuesById[2002] = "NONE_PASSWD"] = 2002;
        values[valuesById[2003] = "PASSWD_ERR"] = 2003;
        values[valuesById[2005] = "INVALID_THREE"] = 2005;
        values[valuesById[2006] = "THREE_ERR"] = 2006;
        values[valuesById[2011] = "INVALID_AUTH"] = 2011;
        values[valuesById[2012] = "EXPIRED_AUTH"] = 2012;
        values[valuesById[2013] = "EXPIRED_AUTH_SN"] = 2013;
        values[valuesById[2018] = "INVALID_APP"] = 2018;
        values[valuesById[2019] = "NOT_BIND_THREE"] = 2019;
        values[valuesById[2021] = "PERMISSION_DENIED"] = 2021;
        values[valuesById[4004] = "NOT_FOUND"] = 4004;
        values[valuesById[4005] = "QuantityLimit"] = 4005;
        values[valuesById[7000] = "COMMON_ERR"] = 7000;
        values[valuesById[7001] = "DB_ERR"] = 7001;
        values[valuesById[7101] = "IO_ERR"] = 7101;
        values[valuesById[8001] = "WX_ERR"] = 8001;
        return values;
    })();

    return error_code;
})();

$root.file = (function() {

    /**
     * Namespace file.
     * @exports file
     * @namespace
     */
    var file = {};

    file.UploadFileRequest = (function() {

        /**
         * Properties of an UploadFileRequest.
         * @memberof file
         * @interface IUploadFileRequest
         * @property {string|null} [filename] UploadFileRequest filename
         * @property {Uint8Array|null} [data] UploadFileRequest data
         * @property {string|null} [group] UploadFileRequest group
         * @property {string|null} [store] UploadFileRequest store
         */

        /**
         * Constructs a new UploadFileRequest.
         * @memberof file
         * @classdesc Represents an UploadFileRequest.
         * @implements IUploadFileRequest
         * @constructor
         * @param {file.IUploadFileRequest=} [properties] Properties to set
         */
        function UploadFileRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UploadFileRequest filename.
         * @member {string} filename
         * @memberof file.UploadFileRequest
         * @instance
         */
        UploadFileRequest.prototype.filename = "";

        /**
         * UploadFileRequest data.
         * @member {Uint8Array} data
         * @memberof file.UploadFileRequest
         * @instance
         */
        UploadFileRequest.prototype.data = $util.newBuffer([]);

        /**
         * UploadFileRequest group.
         * @member {string} group
         * @memberof file.UploadFileRequest
         * @instance
         */
        UploadFileRequest.prototype.group = "";

        /**
         * UploadFileRequest store.
         * @member {string} store
         * @memberof file.UploadFileRequest
         * @instance
         */
        UploadFileRequest.prototype.store = "";

        /**
         * Creates a new UploadFileRequest instance using the specified properties.
         * @function create
         * @memberof file.UploadFileRequest
         * @static
         * @param {file.IUploadFileRequest=} [properties] Properties to set
         * @returns {file.UploadFileRequest} UploadFileRequest instance
         */
        UploadFileRequest.create = function create(properties) {
            return new UploadFileRequest(properties);
        };

        /**
         * Encodes the specified UploadFileRequest message. Does not implicitly {@link file.UploadFileRequest.verify|verify} messages.
         * @function encode
         * @memberof file.UploadFileRequest
         * @static
         * @param {file.IUploadFileRequest} message UploadFileRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadFileRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.filename != null && Object.hasOwnProperty.call(message, "filename"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.filename);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 12, wireType 2 =*/98).bytes(message.data);
            if (message.group != null && Object.hasOwnProperty.call(message, "group"))
                writer.uint32(/* id 21, wireType 2 =*/170).string(message.group);
            if (message.store != null && Object.hasOwnProperty.call(message, "store"))
                writer.uint32(/* id 22, wireType 2 =*/178).string(message.store);
            return writer;
        };

        /**
         * Encodes the specified UploadFileRequest message, length delimited. Does not implicitly {@link file.UploadFileRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.UploadFileRequest
         * @static
         * @param {file.IUploadFileRequest} message UploadFileRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadFileRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UploadFileRequest message from the specified reader or buffer.
         * @function decode
         * @memberof file.UploadFileRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.UploadFileRequest} UploadFileRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadFileRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.UploadFileRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 11: {
                        message.filename = reader.string();
                        break;
                    }
                case 12: {
                        message.data = reader.bytes();
                        break;
                    }
                case 21: {
                        message.group = reader.string();
                        break;
                    }
                case 22: {
                        message.store = reader.string();
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
         * Decodes an UploadFileRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.UploadFileRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.UploadFileRequest} UploadFileRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadFileRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UploadFileRequest message.
         * @function verify
         * @memberof file.UploadFileRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UploadFileRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.filename != null && message.hasOwnProperty("filename"))
                if (!$util.isString(message.filename))
                    return "filename: string expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.group != null && message.hasOwnProperty("group"))
                if (!$util.isString(message.group))
                    return "group: string expected";
            if (message.store != null && message.hasOwnProperty("store"))
                if (!$util.isString(message.store))
                    return "store: string expected";
            return null;
        };

        /**
         * Creates an UploadFileRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.UploadFileRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.UploadFileRequest} UploadFileRequest
         */
        UploadFileRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.file.UploadFileRequest)
                return object;
            var message = new $root.file.UploadFileRequest();
            if (object.filename != null)
                message.filename = String(object.filename);
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            if (object.group != null)
                message.group = String(object.group);
            if (object.store != null)
                message.store = String(object.store);
            return message;
        };

        /**
         * Creates a plain object from an UploadFileRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.UploadFileRequest
         * @static
         * @param {file.UploadFileRequest} message UploadFileRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UploadFileRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.filename = "";
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
                object.group = "";
                object.store = "";
            }
            if (message.filename != null && message.hasOwnProperty("filename"))
                object.filename = message.filename;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (message.group != null && message.hasOwnProperty("group"))
                object.group = message.group;
            if (message.store != null && message.hasOwnProperty("store"))
                object.store = message.store;
            return object;
        };

        /**
         * Converts this UploadFileRequest to JSON.
         * @function toJSON
         * @memberof file.UploadFileRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UploadFileRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UploadFileRequest
         * @function getTypeUrl
         * @memberof file.UploadFileRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UploadFileRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.UploadFileRequest";
        };

        return UploadFileRequest;
    })();

    file.UploadFileResponse = (function() {

        /**
         * Properties of an UploadFileResponse.
         * @memberof file
         * @interface IUploadFileResponse
         * @property {string|null} [path] UploadFileResponse path
         */

        /**
         * Constructs a new UploadFileResponse.
         * @memberof file
         * @classdesc Represents an UploadFileResponse.
         * @implements IUploadFileResponse
         * @constructor
         * @param {file.IUploadFileResponse=} [properties] Properties to set
         */
        function UploadFileResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UploadFileResponse path.
         * @member {string} path
         * @memberof file.UploadFileResponse
         * @instance
         */
        UploadFileResponse.prototype.path = "";

        /**
         * Creates a new UploadFileResponse instance using the specified properties.
         * @function create
         * @memberof file.UploadFileResponse
         * @static
         * @param {file.IUploadFileResponse=} [properties] Properties to set
         * @returns {file.UploadFileResponse} UploadFileResponse instance
         */
        UploadFileResponse.create = function create(properties) {
            return new UploadFileResponse(properties);
        };

        /**
         * Encodes the specified UploadFileResponse message. Does not implicitly {@link file.UploadFileResponse.verify|verify} messages.
         * @function encode
         * @memberof file.UploadFileResponse
         * @static
         * @param {file.IUploadFileResponse} message UploadFileResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadFileResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.path);
            return writer;
        };

        /**
         * Encodes the specified UploadFileResponse message, length delimited. Does not implicitly {@link file.UploadFileResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.UploadFileResponse
         * @static
         * @param {file.IUploadFileResponse} message UploadFileResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadFileResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UploadFileResponse message from the specified reader or buffer.
         * @function decode
         * @memberof file.UploadFileResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.UploadFileResponse} UploadFileResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadFileResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.UploadFileResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 12: {
                        message.path = reader.string();
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
         * Decodes an UploadFileResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.UploadFileResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.UploadFileResponse} UploadFileResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadFileResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UploadFileResponse message.
         * @function verify
         * @memberof file.UploadFileResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UploadFileResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.path != null && message.hasOwnProperty("path"))
                if (!$util.isString(message.path))
                    return "path: string expected";
            return null;
        };

        /**
         * Creates an UploadFileResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.UploadFileResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.UploadFileResponse} UploadFileResponse
         */
        UploadFileResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.file.UploadFileResponse)
                return object;
            var message = new $root.file.UploadFileResponse();
            if (object.path != null)
                message.path = String(object.path);
            return message;
        };

        /**
         * Creates a plain object from an UploadFileResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.UploadFileResponse
         * @static
         * @param {file.UploadFileResponse} message UploadFileResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UploadFileResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.path = "";
            if (message.path != null && message.hasOwnProperty("path"))
                object.path = message.path;
            return object;
        };

        /**
         * Converts this UploadFileResponse to JSON.
         * @function toJSON
         * @memberof file.UploadFileResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UploadFileResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UploadFileResponse
         * @function getTypeUrl
         * @memberof file.UploadFileResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UploadFileResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.UploadFileResponse";
        };

        return UploadFileResponse;
    })();

    file.FilePath = (function() {

        /**
         * Properties of a FilePath.
         * @memberof file
         * @interface IFilePath
         * @property {string|null} [filename] FilePath filename
         * @property {string|null} [path] FilePath path
         */

        /**
         * Constructs a new FilePath.
         * @memberof file
         * @classdesc Represents a FilePath.
         * @implements IFilePath
         * @constructor
         * @param {file.IFilePath=} [properties] Properties to set
         */
        function FilePath(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FilePath filename.
         * @member {string} filename
         * @memberof file.FilePath
         * @instance
         */
        FilePath.prototype.filename = "";

        /**
         * FilePath path.
         * @member {string} path
         * @memberof file.FilePath
         * @instance
         */
        FilePath.prototype.path = "";

        /**
         * Creates a new FilePath instance using the specified properties.
         * @function create
         * @memberof file.FilePath
         * @static
         * @param {file.IFilePath=} [properties] Properties to set
         * @returns {file.FilePath} FilePath instance
         */
        FilePath.create = function create(properties) {
            return new FilePath(properties);
        };

        /**
         * Encodes the specified FilePath message. Does not implicitly {@link file.FilePath.verify|verify} messages.
         * @function encode
         * @memberof file.FilePath
         * @static
         * @param {file.IFilePath} message FilePath message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FilePath.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.filename != null && Object.hasOwnProperty.call(message, "filename"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.filename);
            if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.path);
            return writer;
        };

        /**
         * Encodes the specified FilePath message, length delimited. Does not implicitly {@link file.FilePath.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.FilePath
         * @static
         * @param {file.IFilePath} message FilePath message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FilePath.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FilePath message from the specified reader or buffer.
         * @function decode
         * @memberof file.FilePath
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.FilePath} FilePath
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FilePath.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.FilePath();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 11: {
                        message.filename = reader.string();
                        break;
                    }
                case 12: {
                        message.path = reader.string();
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
         * Decodes a FilePath message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.FilePath
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.FilePath} FilePath
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FilePath.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FilePath message.
         * @function verify
         * @memberof file.FilePath
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FilePath.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.filename != null && message.hasOwnProperty("filename"))
                if (!$util.isString(message.filename))
                    return "filename: string expected";
            if (message.path != null && message.hasOwnProperty("path"))
                if (!$util.isString(message.path))
                    return "path: string expected";
            return null;
        };

        /**
         * Creates a FilePath message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.FilePath
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.FilePath} FilePath
         */
        FilePath.fromObject = function fromObject(object) {
            if (object instanceof $root.file.FilePath)
                return object;
            var message = new $root.file.FilePath();
            if (object.filename != null)
                message.filename = String(object.filename);
            if (object.path != null)
                message.path = String(object.path);
            return message;
        };

        /**
         * Creates a plain object from a FilePath message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.FilePath
         * @static
         * @param {file.FilePath} message FilePath
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FilePath.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.filename = "";
                object.path = "";
            }
            if (message.filename != null && message.hasOwnProperty("filename"))
                object.filename = message.filename;
            if (message.path != null && message.hasOwnProperty("path"))
                object.path = message.path;
            return object;
        };

        /**
         * Converts this FilePath to JSON.
         * @function toJSON
         * @memberof file.FilePath
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FilePath.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FilePath
         * @function getTypeUrl
         * @memberof file.FilePath
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FilePath.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.FilePath";
        };

        return FilePath;
    })();

    file.GetFileListRequest = (function() {

        /**
         * Properties of a GetFileListRequest.
         * @memberof file
         * @interface IGetFileListRequest
         * @property {string|null} [group] GetFileListRequest group
         */

        /**
         * Constructs a new GetFileListRequest.
         * @memberof file
         * @classdesc Represents a GetFileListRequest.
         * @implements IGetFileListRequest
         * @constructor
         * @param {file.IGetFileListRequest=} [properties] Properties to set
         */
        function GetFileListRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetFileListRequest group.
         * @member {string} group
         * @memberof file.GetFileListRequest
         * @instance
         */
        GetFileListRequest.prototype.group = "";

        /**
         * Creates a new GetFileListRequest instance using the specified properties.
         * @function create
         * @memberof file.GetFileListRequest
         * @static
         * @param {file.IGetFileListRequest=} [properties] Properties to set
         * @returns {file.GetFileListRequest} GetFileListRequest instance
         */
        GetFileListRequest.create = function create(properties) {
            return new GetFileListRequest(properties);
        };

        /**
         * Encodes the specified GetFileListRequest message. Does not implicitly {@link file.GetFileListRequest.verify|verify} messages.
         * @function encode
         * @memberof file.GetFileListRequest
         * @static
         * @param {file.IGetFileListRequest} message GetFileListRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetFileListRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.group != null && Object.hasOwnProperty.call(message, "group"))
                writer.uint32(/* id 21, wireType 2 =*/170).string(message.group);
            return writer;
        };

        /**
         * Encodes the specified GetFileListRequest message, length delimited. Does not implicitly {@link file.GetFileListRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.GetFileListRequest
         * @static
         * @param {file.IGetFileListRequest} message GetFileListRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetFileListRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetFileListRequest message from the specified reader or buffer.
         * @function decode
         * @memberof file.GetFileListRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.GetFileListRequest} GetFileListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetFileListRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.GetFileListRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 21: {
                        message.group = reader.string();
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
         * Decodes a GetFileListRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.GetFileListRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.GetFileListRequest} GetFileListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetFileListRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetFileListRequest message.
         * @function verify
         * @memberof file.GetFileListRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetFileListRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.group != null && message.hasOwnProperty("group"))
                if (!$util.isString(message.group))
                    return "group: string expected";
            return null;
        };

        /**
         * Creates a GetFileListRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.GetFileListRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.GetFileListRequest} GetFileListRequest
         */
        GetFileListRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.file.GetFileListRequest)
                return object;
            var message = new $root.file.GetFileListRequest();
            if (object.group != null)
                message.group = String(object.group);
            return message;
        };

        /**
         * Creates a plain object from a GetFileListRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.GetFileListRequest
         * @static
         * @param {file.GetFileListRequest} message GetFileListRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetFileListRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.group = "";
            if (message.group != null && message.hasOwnProperty("group"))
                object.group = message.group;
            return object;
        };

        /**
         * Converts this GetFileListRequest to JSON.
         * @function toJSON
         * @memberof file.GetFileListRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetFileListRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetFileListRequest
         * @function getTypeUrl
         * @memberof file.GetFileListRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetFileListRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.GetFileListRequest";
        };

        return GetFileListRequest;
    })();

    file.GetFileListResponse = (function() {

        /**
         * Properties of a GetFileListResponse.
         * @memberof file
         * @interface IGetFileListResponse
         * @property {Array.<file.IFilePath>|null} [list] GetFileListResponse list
         */

        /**
         * Constructs a new GetFileListResponse.
         * @memberof file
         * @classdesc Represents a GetFileListResponse.
         * @implements IGetFileListResponse
         * @constructor
         * @param {file.IGetFileListResponse=} [properties] Properties to set
         */
        function GetFileListResponse(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetFileListResponse list.
         * @member {Array.<file.IFilePath>} list
         * @memberof file.GetFileListResponse
         * @instance
         */
        GetFileListResponse.prototype.list = $util.emptyArray;

        /**
         * Creates a new GetFileListResponse instance using the specified properties.
         * @function create
         * @memberof file.GetFileListResponse
         * @static
         * @param {file.IGetFileListResponse=} [properties] Properties to set
         * @returns {file.GetFileListResponse} GetFileListResponse instance
         */
        GetFileListResponse.create = function create(properties) {
            return new GetFileListResponse(properties);
        };

        /**
         * Encodes the specified GetFileListResponse message. Does not implicitly {@link file.GetFileListResponse.verify|verify} messages.
         * @function encode
         * @memberof file.GetFileListResponse
         * @static
         * @param {file.IGetFileListResponse} message GetFileListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetFileListResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.file.FilePath.encode(message.list[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetFileListResponse message, length delimited. Does not implicitly {@link file.GetFileListResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.GetFileListResponse
         * @static
         * @param {file.IGetFileListResponse} message GetFileListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetFileListResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetFileListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof file.GetFileListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.GetFileListResponse} GetFileListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetFileListResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.GetFileListResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 10: {
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.file.FilePath.decode(reader, reader.uint32()));
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
         * Decodes a GetFileListResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.GetFileListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.GetFileListResponse} GetFileListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetFileListResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetFileListResponse message.
         * @function verify
         * @memberof file.GetFileListResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetFileListResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.file.FilePath.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetFileListResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.GetFileListResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.GetFileListResponse} GetFileListResponse
         */
        GetFileListResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.file.GetFileListResponse)
                return object;
            var message = new $root.file.GetFileListResponse();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".file.GetFileListResponse.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".file.GetFileListResponse.list: object expected");
                    message.list[i] = $root.file.FilePath.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetFileListResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.GetFileListResponse
         * @static
         * @param {file.GetFileListResponse} message GetFileListResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetFileListResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.file.FilePath.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this GetFileListResponse to JSON.
         * @function toJSON
         * @memberof file.GetFileListResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetFileListResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetFileListResponse
         * @function getTypeUrl
         * @memberof file.GetFileListResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetFileListResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.GetFileListResponse";
        };

        return GetFileListResponse;
    })();

    file.FileService = (function() {

        /**
         * Constructs a new FileService service.
         * @memberof file
         * @classdesc Represents a FileService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function FileService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (FileService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = FileService;

        /**
         * Creates new FileService service using the specified rpc implementation.
         * @function create
         * @memberof file.FileService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {FileService} RPC service. Useful where requests and/or responses are streamed.
         */
        FileService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link file.FileService#uploadFile}.
         * @memberof file.FileService
         * @typedef UploadFileCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {file.UploadFileResponse} [response] UploadFileResponse
         */

        /**
         * Calls UploadFile.
         * @function uploadFile
         * @memberof file.FileService
         * @instance
         * @param {file.IUploadFileRequest} request UploadFileRequest message or plain object
         * @param {file.FileService.UploadFileCallback} callback Node-style callback called with the error, if any, and UploadFileResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(FileService.prototype.uploadFile = function uploadFile(request, callback) {
            return this.rpcCall(uploadFile, $root.file.UploadFileRequest, $root.file.UploadFileResponse, request, callback);
        }, "name", { value: "UploadFile" });

        /**
         * Calls UploadFile.
         * @function uploadFile
         * @memberof file.FileService
         * @instance
         * @param {file.IUploadFileRequest} request UploadFileRequest message or plain object
         * @returns {Promise<file.UploadFileResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link file.FileService#getFileList}.
         * @memberof file.FileService
         * @typedef GetFileListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {file.GetFileListResponse} [response] GetFileListResponse
         */

        /**
         * Calls GetFileList.
         * @function getFileList
         * @memberof file.FileService
         * @instance
         * @param {file.IGetFileListRequest} request GetFileListRequest message or plain object
         * @param {file.FileService.GetFileListCallback} callback Node-style callback called with the error, if any, and GetFileListResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(FileService.prototype.getFileList = function getFileList(request, callback) {
            return this.rpcCall(getFileList, $root.file.GetFileListRequest, $root.file.GetFileListResponse, request, callback);
        }, "name", { value: "GetFileList" });

        /**
         * Calls GetFileList.
         * @function getFileList
         * @memberof file.FileService
         * @instance
         * @param {file.IGetFileListRequest} request GetFileListRequest message or plain object
         * @returns {Promise<file.GetFileListResponse>} Promise
         * @variation 2
         */

        return FileService;
    })();

    return file;
})();

$root.form_app = (function() {

    /**
     * Namespace form_app.
     * @exports form_app
     * @namespace
     */
    var form_app = {};

    form_app.SetFormAppRequest = (function() {

        /**
         * Properties of a SetFormAppRequest.
         * @memberof form_app
         * @interface ISetFormAppRequest
         * @property {auth.IAuthorization|null} [auth] SetFormAppRequest auth
         * @property {app.IAppIndex|null} [app] SetFormAppRequest app
         * @property {string|null} [prefix_img] SetFormAppRequest prefix_img
         * @property {string|null} [form] SetFormAppRequest form
         * @property {string|null} [suffix_img] SetFormAppRequest suffix_img
         * @property {string|null} [passwd_title] SetFormAppRequest passwd_title
         * @property {number|null} [price] SetFormAppRequest price
         * @property {number|null} [limit] SetFormAppRequest limit
         */

        /**
         * Constructs a new SetFormAppRequest.
         * @memberof form_app
         * @classdesc Represents a SetFormAppRequest.
         * @implements ISetFormAppRequest
         * @constructor
         * @param {form_app.ISetFormAppRequest=} [properties] Properties to set
         */
        function SetFormAppRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetFormAppRequest auth.
         * @member {auth.IAuthorization|null|undefined} auth
         * @memberof form_app.SetFormAppRequest
         * @instance
         */
        SetFormAppRequest.prototype.auth = null;

        /**
         * SetFormAppRequest app.
         * @member {app.IAppIndex|null|undefined} app
         * @memberof form_app.SetFormAppRequest
         * @instance
         */
        SetFormAppRequest.prototype.app = null;

        /**
         * SetFormAppRequest prefix_img.
         * @member {string} prefix_img
         * @memberof form_app.SetFormAppRequest
         * @instance
         */
        SetFormAppRequest.prototype.prefix_img = "";

        /**
         * SetFormAppRequest form.
         * @member {string} form
         * @memberof form_app.SetFormAppRequest
         * @instance
         */
        SetFormAppRequest.prototype.form = "";

        /**
         * SetFormAppRequest suffix_img.
         * @member {string} suffix_img
         * @memberof form_app.SetFormAppRequest
         * @instance
         */
        SetFormAppRequest.prototype.suffix_img = "";

        /**
         * SetFormAppRequest passwd_title.
         * @member {string} passwd_title
         * @memberof form_app.SetFormAppRequest
         * @instance
         */
        SetFormAppRequest.prototype.passwd_title = "";

        /**
         * SetFormAppRequest price.
         * @member {number} price
         * @memberof form_app.SetFormAppRequest
         * @instance
         */
        SetFormAppRequest.prototype.price = 0;

        /**
         * SetFormAppRequest limit.
         * @member {number} limit
         * @memberof form_app.SetFormAppRequest
         * @instance
         */
        SetFormAppRequest.prototype.limit = 0;

        /**
         * Creates a new SetFormAppRequest instance using the specified properties.
         * @function create
         * @memberof form_app.SetFormAppRequest
         * @static
         * @param {form_app.ISetFormAppRequest=} [properties] Properties to set
         * @returns {form_app.SetFormAppRequest} SetFormAppRequest instance
         */
        SetFormAppRequest.create = function create(properties) {
            return new SetFormAppRequest(properties);
        };

        /**
         * Encodes the specified SetFormAppRequest message. Does not implicitly {@link form_app.SetFormAppRequest.verify|verify} messages.
         * @function encode
         * @memberof form_app.SetFormAppRequest
         * @static
         * @param {form_app.ISetFormAppRequest} message SetFormAppRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetFormAppRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.auth != null && Object.hasOwnProperty.call(message, "auth"))
                $root.auth.Authorization.encode(message.auth, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.app != null && Object.hasOwnProperty.call(message, "app"))
                $root.app.AppIndex.encode(message.app, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.prefix_img != null && Object.hasOwnProperty.call(message, "prefix_img"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.prefix_img);
            if (message.form != null && Object.hasOwnProperty.call(message, "form"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.form);
            if (message.suffix_img != null && Object.hasOwnProperty.call(message, "suffix_img"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.suffix_img);
            if (message.passwd_title != null && Object.hasOwnProperty.call(message, "passwd_title"))
                writer.uint32(/* id 20, wireType 2 =*/162).string(message.passwd_title);
            if (message.price != null && Object.hasOwnProperty.call(message, "price"))
                writer.uint32(/* id 21, wireType 1 =*/169).double(message.price);
            if (message.limit != null && Object.hasOwnProperty.call(message, "limit"))
                writer.uint32(/* id 22, wireType 0 =*/176).uint32(message.limit);
            return writer;
        };

        /**
         * Encodes the specified SetFormAppRequest message, length delimited. Does not implicitly {@link form_app.SetFormAppRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof form_app.SetFormAppRequest
         * @static
         * @param {form_app.ISetFormAppRequest} message SetFormAppRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetFormAppRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetFormAppRequest message from the specified reader or buffer.
         * @function decode
         * @memberof form_app.SetFormAppRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {form_app.SetFormAppRequest} SetFormAppRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetFormAppRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.form_app.SetFormAppRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.auth = $root.auth.Authorization.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.app = $root.app.AppIndex.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.prefix_img = reader.string();
                        break;
                    }
                case 12: {
                        message.form = reader.string();
                        break;
                    }
                case 13: {
                        message.suffix_img = reader.string();
                        break;
                    }
                case 20: {
                        message.passwd_title = reader.string();
                        break;
                    }
                case 21: {
                        message.price = reader.double();
                        break;
                    }
                case 22: {
                        message.limit = reader.uint32();
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
         * Decodes a SetFormAppRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof form_app.SetFormAppRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {form_app.SetFormAppRequest} SetFormAppRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetFormAppRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetFormAppRequest message.
         * @function verify
         * @memberof form_app.SetFormAppRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetFormAppRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.auth != null && message.hasOwnProperty("auth")) {
                var error = $root.auth.Authorization.verify(message.auth);
                if (error)
                    return "auth." + error;
            }
            if (message.app != null && message.hasOwnProperty("app")) {
                var error = $root.app.AppIndex.verify(message.app);
                if (error)
                    return "app." + error;
            }
            if (message.prefix_img != null && message.hasOwnProperty("prefix_img"))
                if (!$util.isString(message.prefix_img))
                    return "prefix_img: string expected";
            if (message.form != null && message.hasOwnProperty("form"))
                if (!$util.isString(message.form))
                    return "form: string expected";
            if (message.suffix_img != null && message.hasOwnProperty("suffix_img"))
                if (!$util.isString(message.suffix_img))
                    return "suffix_img: string expected";
            if (message.passwd_title != null && message.hasOwnProperty("passwd_title"))
                if (!$util.isString(message.passwd_title))
                    return "passwd_title: string expected";
            if (message.price != null && message.hasOwnProperty("price"))
                if (typeof message.price !== "number")
                    return "price: number expected";
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (!$util.isInteger(message.limit))
                    return "limit: integer expected";
            return null;
        };

        /**
         * Creates a SetFormAppRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof form_app.SetFormAppRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {form_app.SetFormAppRequest} SetFormAppRequest
         */
        SetFormAppRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.form_app.SetFormAppRequest)
                return object;
            var message = new $root.form_app.SetFormAppRequest();
            if (object.auth != null) {
                if (typeof object.auth !== "object")
                    throw TypeError(".form_app.SetFormAppRequest.auth: object expected");
                message.auth = $root.auth.Authorization.fromObject(object.auth);
            }
            if (object.app != null) {
                if (typeof object.app !== "object")
                    throw TypeError(".form_app.SetFormAppRequest.app: object expected");
                message.app = $root.app.AppIndex.fromObject(object.app);
            }
            if (object.prefix_img != null)
                message.prefix_img = String(object.prefix_img);
            if (object.form != null)
                message.form = String(object.form);
            if (object.suffix_img != null)
                message.suffix_img = String(object.suffix_img);
            if (object.passwd_title != null)
                message.passwd_title = String(object.passwd_title);
            if (object.price != null)
                message.price = Number(object.price);
            if (object.limit != null)
                message.limit = object.limit >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SetFormAppRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof form_app.SetFormAppRequest
         * @static
         * @param {form_app.SetFormAppRequest} message SetFormAppRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetFormAppRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.auth = null;
                object.app = null;
                object.prefix_img = "";
                object.form = "";
                object.suffix_img = "";
                object.passwd_title = "";
                object.price = 0;
                object.limit = 0;
            }
            if (message.auth != null && message.hasOwnProperty("auth"))
                object.auth = $root.auth.Authorization.toObject(message.auth, options);
            if (message.app != null && message.hasOwnProperty("app"))
                object.app = $root.app.AppIndex.toObject(message.app, options);
            if (message.prefix_img != null && message.hasOwnProperty("prefix_img"))
                object.prefix_img = message.prefix_img;
            if (message.form != null && message.hasOwnProperty("form"))
                object.form = message.form;
            if (message.suffix_img != null && message.hasOwnProperty("suffix_img"))
                object.suffix_img = message.suffix_img;
            if (message.passwd_title != null && message.hasOwnProperty("passwd_title"))
                object.passwd_title = message.passwd_title;
            if (message.price != null && message.hasOwnProperty("price"))
                object.price = options.json && !isFinite(message.price) ? String(message.price) : message.price;
            if (message.limit != null && message.hasOwnProperty("limit"))
                object.limit = message.limit;
            return object;
        };

        /**
         * Converts this SetFormAppRequest to JSON.
         * @function toJSON
         * @memberof form_app.SetFormAppRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetFormAppRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetFormAppRequest
         * @function getTypeUrl
         * @memberof form_app.SetFormAppRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetFormAppRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/form_app.SetFormAppRequest";
        };

        return SetFormAppRequest;
    })();

    form_app.GetFormAppRequest = (function() {

        /**
         * Properties of a GetFormAppRequest.
         * @memberof form_app
         * @interface IGetFormAppRequest
         * @property {app.IAppIndex|null} [app] GetFormAppRequest app
         */

        /**
         * Constructs a new GetFormAppRequest.
         * @memberof form_app
         * @classdesc Represents a GetFormAppRequest.
         * @implements IGetFormAppRequest
         * @constructor
         * @param {form_app.IGetFormAppRequest=} [properties] Properties to set
         */
        function GetFormAppRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetFormAppRequest app.
         * @member {app.IAppIndex|null|undefined} app
         * @memberof form_app.GetFormAppRequest
         * @instance
         */
        GetFormAppRequest.prototype.app = null;

        /**
         * Creates a new GetFormAppRequest instance using the specified properties.
         * @function create
         * @memberof form_app.GetFormAppRequest
         * @static
         * @param {form_app.IGetFormAppRequest=} [properties] Properties to set
         * @returns {form_app.GetFormAppRequest} GetFormAppRequest instance
         */
        GetFormAppRequest.create = function create(properties) {
            return new GetFormAppRequest(properties);
        };

        /**
         * Encodes the specified GetFormAppRequest message. Does not implicitly {@link form_app.GetFormAppRequest.verify|verify} messages.
         * @function encode
         * @memberof form_app.GetFormAppRequest
         * @static
         * @param {form_app.IGetFormAppRequest} message GetFormAppRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetFormAppRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.app != null && Object.hasOwnProperty.call(message, "app"))
                $root.app.AppIndex.encode(message.app, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetFormAppRequest message, length delimited. Does not implicitly {@link form_app.GetFormAppRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof form_app.GetFormAppRequest
         * @static
         * @param {form_app.IGetFormAppRequest} message GetFormAppRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetFormAppRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetFormAppRequest message from the specified reader or buffer.
         * @function decode
         * @memberof form_app.GetFormAppRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {form_app.GetFormAppRequest} GetFormAppRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetFormAppRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.form_app.GetFormAppRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 2: {
                        message.app = $root.app.AppIndex.decode(reader, reader.uint32());
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
         * Decodes a GetFormAppRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof form_app.GetFormAppRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {form_app.GetFormAppRequest} GetFormAppRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetFormAppRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetFormAppRequest message.
         * @function verify
         * @memberof form_app.GetFormAppRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetFormAppRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.app != null && message.hasOwnProperty("app")) {
                var error = $root.app.AppIndex.verify(message.app);
                if (error)
                    return "app." + error;
            }
            return null;
        };

        /**
         * Creates a GetFormAppRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof form_app.GetFormAppRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {form_app.GetFormAppRequest} GetFormAppRequest
         */
        GetFormAppRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.form_app.GetFormAppRequest)
                return object;
            var message = new $root.form_app.GetFormAppRequest();
            if (object.app != null) {
                if (typeof object.app !== "object")
                    throw TypeError(".form_app.GetFormAppRequest.app: object expected");
                message.app = $root.app.AppIndex.fromObject(object.app);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetFormAppRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof form_app.GetFormAppRequest
         * @static
         * @param {form_app.GetFormAppRequest} message GetFormAppRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetFormAppRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.app = null;
            if (message.app != null && message.hasOwnProperty("app"))
                object.app = $root.app.AppIndex.toObject(message.app, options);
            return object;
        };

        /**
         * Converts this GetFormAppRequest to JSON.
         * @function toJSON
         * @memberof form_app.GetFormAppRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetFormAppRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetFormAppRequest
         * @function getTypeUrl
         * @memberof form_app.GetFormAppRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetFormAppRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/form_app.GetFormAppRequest";
        };

        return GetFormAppRequest;
    })();

    form_app.FormApp = (function() {

        /**
         * Properties of a FormApp.
         * @memberof form_app
         * @interface IFormApp
         * @property {string|null} [prefix_img] FormApp prefix_img
         * @property {string|null} [form] FormApp form
         * @property {string|null} [suffix_img] FormApp suffix_img
         * @property {string|null} [passwd_title] FormApp passwd_title
         * @property {number|null} [price] FormApp price
         * @property {number|null} [limit] FormApp limit
         */

        /**
         * Constructs a new FormApp.
         * @memberof form_app
         * @classdesc Represents a FormApp.
         * @implements IFormApp
         * @constructor
         * @param {form_app.IFormApp=} [properties] Properties to set
         */
        function FormApp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FormApp prefix_img.
         * @member {string} prefix_img
         * @memberof form_app.FormApp
         * @instance
         */
        FormApp.prototype.prefix_img = "";

        /**
         * FormApp form.
         * @member {string} form
         * @memberof form_app.FormApp
         * @instance
         */
        FormApp.prototype.form = "";

        /**
         * FormApp suffix_img.
         * @member {string} suffix_img
         * @memberof form_app.FormApp
         * @instance
         */
        FormApp.prototype.suffix_img = "";

        /**
         * FormApp passwd_title.
         * @member {string} passwd_title
         * @memberof form_app.FormApp
         * @instance
         */
        FormApp.prototype.passwd_title = "";

        /**
         * FormApp price.
         * @member {number} price
         * @memberof form_app.FormApp
         * @instance
         */
        FormApp.prototype.price = 0;

        /**
         * FormApp limit.
         * @member {number} limit
         * @memberof form_app.FormApp
         * @instance
         */
        FormApp.prototype.limit = 0;

        /**
         * Creates a new FormApp instance using the specified properties.
         * @function create
         * @memberof form_app.FormApp
         * @static
         * @param {form_app.IFormApp=} [properties] Properties to set
         * @returns {form_app.FormApp} FormApp instance
         */
        FormApp.create = function create(properties) {
            return new FormApp(properties);
        };

        /**
         * Encodes the specified FormApp message. Does not implicitly {@link form_app.FormApp.verify|verify} messages.
         * @function encode
         * @memberof form_app.FormApp
         * @static
         * @param {form_app.IFormApp} message FormApp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FormApp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.prefix_img != null && Object.hasOwnProperty.call(message, "prefix_img"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.prefix_img);
            if (message.form != null && Object.hasOwnProperty.call(message, "form"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.form);
            if (message.suffix_img != null && Object.hasOwnProperty.call(message, "suffix_img"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.suffix_img);
            if (message.passwd_title != null && Object.hasOwnProperty.call(message, "passwd_title"))
                writer.uint32(/* id 20, wireType 2 =*/162).string(message.passwd_title);
            if (message.price != null && Object.hasOwnProperty.call(message, "price"))
                writer.uint32(/* id 21, wireType 1 =*/169).double(message.price);
            if (message.limit != null && Object.hasOwnProperty.call(message, "limit"))
                writer.uint32(/* id 22, wireType 0 =*/176).uint32(message.limit);
            return writer;
        };

        /**
         * Encodes the specified FormApp message, length delimited. Does not implicitly {@link form_app.FormApp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof form_app.FormApp
         * @static
         * @param {form_app.IFormApp} message FormApp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FormApp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FormApp message from the specified reader or buffer.
         * @function decode
         * @memberof form_app.FormApp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {form_app.FormApp} FormApp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FormApp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.form_app.FormApp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 11: {
                        message.prefix_img = reader.string();
                        break;
                    }
                case 12: {
                        message.form = reader.string();
                        break;
                    }
                case 13: {
                        message.suffix_img = reader.string();
                        break;
                    }
                case 20: {
                        message.passwd_title = reader.string();
                        break;
                    }
                case 21: {
                        message.price = reader.double();
                        break;
                    }
                case 22: {
                        message.limit = reader.uint32();
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
         * Decodes a FormApp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof form_app.FormApp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {form_app.FormApp} FormApp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FormApp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FormApp message.
         * @function verify
         * @memberof form_app.FormApp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FormApp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.prefix_img != null && message.hasOwnProperty("prefix_img"))
                if (!$util.isString(message.prefix_img))
                    return "prefix_img: string expected";
            if (message.form != null && message.hasOwnProperty("form"))
                if (!$util.isString(message.form))
                    return "form: string expected";
            if (message.suffix_img != null && message.hasOwnProperty("suffix_img"))
                if (!$util.isString(message.suffix_img))
                    return "suffix_img: string expected";
            if (message.passwd_title != null && message.hasOwnProperty("passwd_title"))
                if (!$util.isString(message.passwd_title))
                    return "passwd_title: string expected";
            if (message.price != null && message.hasOwnProperty("price"))
                if (typeof message.price !== "number")
                    return "price: number expected";
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (!$util.isInteger(message.limit))
                    return "limit: integer expected";
            return null;
        };

        /**
         * Creates a FormApp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof form_app.FormApp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {form_app.FormApp} FormApp
         */
        FormApp.fromObject = function fromObject(object) {
            if (object instanceof $root.form_app.FormApp)
                return object;
            var message = new $root.form_app.FormApp();
            if (object.prefix_img != null)
                message.prefix_img = String(object.prefix_img);
            if (object.form != null)
                message.form = String(object.form);
            if (object.suffix_img != null)
                message.suffix_img = String(object.suffix_img);
            if (object.passwd_title != null)
                message.passwd_title = String(object.passwd_title);
            if (object.price != null)
                message.price = Number(object.price);
            if (object.limit != null)
                message.limit = object.limit >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a FormApp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof form_app.FormApp
         * @static
         * @param {form_app.FormApp} message FormApp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FormApp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.prefix_img = "";
                object.form = "";
                object.suffix_img = "";
                object.passwd_title = "";
                object.price = 0;
                object.limit = 0;
            }
            if (message.prefix_img != null && message.hasOwnProperty("prefix_img"))
                object.prefix_img = message.prefix_img;
            if (message.form != null && message.hasOwnProperty("form"))
                object.form = message.form;
            if (message.suffix_img != null && message.hasOwnProperty("suffix_img"))
                object.suffix_img = message.suffix_img;
            if (message.passwd_title != null && message.hasOwnProperty("passwd_title"))
                object.passwd_title = message.passwd_title;
            if (message.price != null && message.hasOwnProperty("price"))
                object.price = options.json && !isFinite(message.price) ? String(message.price) : message.price;
            if (message.limit != null && message.hasOwnProperty("limit"))
                object.limit = message.limit;
            return object;
        };

        /**
         * Converts this FormApp to JSON.
         * @function toJSON
         * @memberof form_app.FormApp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FormApp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FormApp
         * @function getTypeUrl
         * @memberof form_app.FormApp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FormApp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/form_app.FormApp";
        };

        return FormApp;
    })();

    form_app.FormAppService = (function() {

        /**
         * Constructs a new FormAppService service.
         * @memberof form_app
         * @classdesc Represents a FormAppService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function FormAppService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (FormAppService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = FormAppService;

        /**
         * Creates new FormAppService service using the specified rpc implementation.
         * @function create
         * @memberof form_app.FormAppService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {FormAppService} RPC service. Useful where requests and/or responses are streamed.
         */
        FormAppService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link form_app.FormAppService#setFormApp}.
         * @memberof form_app.FormAppService
         * @typedef SetFormAppCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {common.Empty} [response] Empty
         */

        /**
         * Calls SetFormApp.
         * @function setFormApp
         * @memberof form_app.FormAppService
         * @instance
         * @param {form_app.ISetFormAppRequest} request SetFormAppRequest message or plain object
         * @param {form_app.FormAppService.SetFormAppCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(FormAppService.prototype.setFormApp = function setFormApp(request, callback) {
            return this.rpcCall(setFormApp, $root.form_app.SetFormAppRequest, $root.common.Empty, request, callback);
        }, "name", { value: "SetFormApp" });

        /**
         * Calls SetFormApp.
         * @function setFormApp
         * @memberof form_app.FormAppService
         * @instance
         * @param {form_app.ISetFormAppRequest} request SetFormAppRequest message or plain object
         * @returns {Promise<common.Empty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link form_app.FormAppService#getFormApp}.
         * @memberof form_app.FormAppService
         * @typedef GetFormAppCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {form_app.FormApp} [response] FormApp
         */

        /**
         * Calls GetFormApp.
         * @function getFormApp
         * @memberof form_app.FormAppService
         * @instance
         * @param {form_app.IGetFormAppRequest} request GetFormAppRequest message or plain object
         * @param {form_app.FormAppService.GetFormAppCallback} callback Node-style callback called with the error, if any, and FormApp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(FormAppService.prototype.getFormApp = function getFormApp(request, callback) {
            return this.rpcCall(getFormApp, $root.form_app.GetFormAppRequest, $root.form_app.FormApp, request, callback);
        }, "name", { value: "GetFormApp" });

        /**
         * Calls GetFormApp.
         * @function getFormApp
         * @memberof form_app.FormAppService
         * @instance
         * @param {form_app.IGetFormAppRequest} request GetFormAppRequest message or plain object
         * @returns {Promise<form_app.FormApp>} Promise
         * @variation 2
         */

        return FormAppService;
    })();

    return form_app;
})();

$root.form_data = (function() {

    /**
     * Namespace form_data.
     * @exports form_data
     * @namespace
     */
    var form_data = {};

    form_data.SubmitFormDataRequest = (function() {

        /**
         * Properties of a SubmitFormDataRequest.
         * @memberof form_data
         * @interface ISubmitFormDataRequest
         * @property {auth.IAuthorization|null} [auth] SubmitFormDataRequest auth
         * @property {app.IAppIndex|null} [app] SubmitFormDataRequest app
         * @property {string|null} [form] SubmitFormDataRequest form
         * @property {string|null} [passwd] SubmitFormDataRequest passwd
         */

        /**
         * Constructs a new SubmitFormDataRequest.
         * @memberof form_data
         * @classdesc Represents a SubmitFormDataRequest.
         * @implements ISubmitFormDataRequest
         * @constructor
         * @param {form_data.ISubmitFormDataRequest=} [properties] Properties to set
         */
        function SubmitFormDataRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SubmitFormDataRequest auth.
         * @member {auth.IAuthorization|null|undefined} auth
         * @memberof form_data.SubmitFormDataRequest
         * @instance
         */
        SubmitFormDataRequest.prototype.auth = null;

        /**
         * SubmitFormDataRequest app.
         * @member {app.IAppIndex|null|undefined} app
         * @memberof form_data.SubmitFormDataRequest
         * @instance
         */
        SubmitFormDataRequest.prototype.app = null;

        /**
         * SubmitFormDataRequest form.
         * @member {string} form
         * @memberof form_data.SubmitFormDataRequest
         * @instance
         */
        SubmitFormDataRequest.prototype.form = "";

        /**
         * SubmitFormDataRequest passwd.
         * @member {string} passwd
         * @memberof form_data.SubmitFormDataRequest
         * @instance
         */
        SubmitFormDataRequest.prototype.passwd = "";

        /**
         * Creates a new SubmitFormDataRequest instance using the specified properties.
         * @function create
         * @memberof form_data.SubmitFormDataRequest
         * @static
         * @param {form_data.ISubmitFormDataRequest=} [properties] Properties to set
         * @returns {form_data.SubmitFormDataRequest} SubmitFormDataRequest instance
         */
        SubmitFormDataRequest.create = function create(properties) {
            return new SubmitFormDataRequest(properties);
        };

        /**
         * Encodes the specified SubmitFormDataRequest message. Does not implicitly {@link form_data.SubmitFormDataRequest.verify|verify} messages.
         * @function encode
         * @memberof form_data.SubmitFormDataRequest
         * @static
         * @param {form_data.ISubmitFormDataRequest} message SubmitFormDataRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubmitFormDataRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.auth != null && Object.hasOwnProperty.call(message, "auth"))
                $root.auth.Authorization.encode(message.auth, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.app != null && Object.hasOwnProperty.call(message, "app"))
                $root.app.AppIndex.encode(message.app, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.form != null && Object.hasOwnProperty.call(message, "form"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.form);
            if (message.passwd != null && Object.hasOwnProperty.call(message, "passwd"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.passwd);
            return writer;
        };

        /**
         * Encodes the specified SubmitFormDataRequest message, length delimited. Does not implicitly {@link form_data.SubmitFormDataRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof form_data.SubmitFormDataRequest
         * @static
         * @param {form_data.ISubmitFormDataRequest} message SubmitFormDataRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubmitFormDataRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SubmitFormDataRequest message from the specified reader or buffer.
         * @function decode
         * @memberof form_data.SubmitFormDataRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {form_data.SubmitFormDataRequest} SubmitFormDataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubmitFormDataRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.form_data.SubmitFormDataRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.auth = $root.auth.Authorization.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.app = $root.app.AppIndex.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        message.form = reader.string();
                        break;
                    }
                case 13: {
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
         * Decodes a SubmitFormDataRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof form_data.SubmitFormDataRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {form_data.SubmitFormDataRequest} SubmitFormDataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubmitFormDataRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SubmitFormDataRequest message.
         * @function verify
         * @memberof form_data.SubmitFormDataRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SubmitFormDataRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.auth != null && message.hasOwnProperty("auth")) {
                var error = $root.auth.Authorization.verify(message.auth);
                if (error)
                    return "auth." + error;
            }
            if (message.app != null && message.hasOwnProperty("app")) {
                var error = $root.app.AppIndex.verify(message.app);
                if (error)
                    return "app." + error;
            }
            if (message.form != null && message.hasOwnProperty("form"))
                if (!$util.isString(message.form))
                    return "form: string expected";
            if (message.passwd != null && message.hasOwnProperty("passwd"))
                if (!$util.isString(message.passwd))
                    return "passwd: string expected";
            return null;
        };

        /**
         * Creates a SubmitFormDataRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof form_data.SubmitFormDataRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {form_data.SubmitFormDataRequest} SubmitFormDataRequest
         */
        SubmitFormDataRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.form_data.SubmitFormDataRequest)
                return object;
            var message = new $root.form_data.SubmitFormDataRequest();
            if (object.auth != null) {
                if (typeof object.auth !== "object")
                    throw TypeError(".form_data.SubmitFormDataRequest.auth: object expected");
                message.auth = $root.auth.Authorization.fromObject(object.auth);
            }
            if (object.app != null) {
                if (typeof object.app !== "object")
                    throw TypeError(".form_data.SubmitFormDataRequest.app: object expected");
                message.app = $root.app.AppIndex.fromObject(object.app);
            }
            if (object.form != null)
                message.form = String(object.form);
            if (object.passwd != null)
                message.passwd = String(object.passwd);
            return message;
        };

        /**
         * Creates a plain object from a SubmitFormDataRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof form_data.SubmitFormDataRequest
         * @static
         * @param {form_data.SubmitFormDataRequest} message SubmitFormDataRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SubmitFormDataRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.auth = null;
                object.app = null;
                object.form = "";
                object.passwd = "";
            }
            if (message.auth != null && message.hasOwnProperty("auth"))
                object.auth = $root.auth.Authorization.toObject(message.auth, options);
            if (message.app != null && message.hasOwnProperty("app"))
                object.app = $root.app.AppIndex.toObject(message.app, options);
            if (message.form != null && message.hasOwnProperty("form"))
                object.form = message.form;
            if (message.passwd != null && message.hasOwnProperty("passwd"))
                object.passwd = message.passwd;
            return object;
        };

        /**
         * Converts this SubmitFormDataRequest to JSON.
         * @function toJSON
         * @memberof form_data.SubmitFormDataRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SubmitFormDataRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SubmitFormDataRequest
         * @function getTypeUrl
         * @memberof form_data.SubmitFormDataRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SubmitFormDataRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/form_data.SubmitFormDataRequest";
        };

        return SubmitFormDataRequest;
    })();

    form_data.GetFormDataRequest = (function() {

        /**
         * Properties of a GetFormDataRequest.
         * @memberof form_data
         * @interface IGetFormDataRequest
         * @property {auth.IAuthorization|null} [auth] GetFormDataRequest auth
         * @property {app.IAppIndex|null} [app] GetFormDataRequest app
         */

        /**
         * Constructs a new GetFormDataRequest.
         * @memberof form_data
         * @classdesc Represents a GetFormDataRequest.
         * @implements IGetFormDataRequest
         * @constructor
         * @param {form_data.IGetFormDataRequest=} [properties] Properties to set
         */
        function GetFormDataRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetFormDataRequest auth.
         * @member {auth.IAuthorization|null|undefined} auth
         * @memberof form_data.GetFormDataRequest
         * @instance
         */
        GetFormDataRequest.prototype.auth = null;

        /**
         * GetFormDataRequest app.
         * @member {app.IAppIndex|null|undefined} app
         * @memberof form_data.GetFormDataRequest
         * @instance
         */
        GetFormDataRequest.prototype.app = null;

        /**
         * Creates a new GetFormDataRequest instance using the specified properties.
         * @function create
         * @memberof form_data.GetFormDataRequest
         * @static
         * @param {form_data.IGetFormDataRequest=} [properties] Properties to set
         * @returns {form_data.GetFormDataRequest} GetFormDataRequest instance
         */
        GetFormDataRequest.create = function create(properties) {
            return new GetFormDataRequest(properties);
        };

        /**
         * Encodes the specified GetFormDataRequest message. Does not implicitly {@link form_data.GetFormDataRequest.verify|verify} messages.
         * @function encode
         * @memberof form_data.GetFormDataRequest
         * @static
         * @param {form_data.IGetFormDataRequest} message GetFormDataRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetFormDataRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.auth != null && Object.hasOwnProperty.call(message, "auth"))
                $root.auth.Authorization.encode(message.auth, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.app != null && Object.hasOwnProperty.call(message, "app"))
                $root.app.AppIndex.encode(message.app, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetFormDataRequest message, length delimited. Does not implicitly {@link form_data.GetFormDataRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof form_data.GetFormDataRequest
         * @static
         * @param {form_data.IGetFormDataRequest} message GetFormDataRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetFormDataRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetFormDataRequest message from the specified reader or buffer.
         * @function decode
         * @memberof form_data.GetFormDataRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {form_data.GetFormDataRequest} GetFormDataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetFormDataRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.form_data.GetFormDataRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.auth = $root.auth.Authorization.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.app = $root.app.AppIndex.decode(reader, reader.uint32());
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
         * Decodes a GetFormDataRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof form_data.GetFormDataRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {form_data.GetFormDataRequest} GetFormDataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetFormDataRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetFormDataRequest message.
         * @function verify
         * @memberof form_data.GetFormDataRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetFormDataRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.auth != null && message.hasOwnProperty("auth")) {
                var error = $root.auth.Authorization.verify(message.auth);
                if (error)
                    return "auth." + error;
            }
            if (message.app != null && message.hasOwnProperty("app")) {
                var error = $root.app.AppIndex.verify(message.app);
                if (error)
                    return "app." + error;
            }
            return null;
        };

        /**
         * Creates a GetFormDataRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof form_data.GetFormDataRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {form_data.GetFormDataRequest} GetFormDataRequest
         */
        GetFormDataRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.form_data.GetFormDataRequest)
                return object;
            var message = new $root.form_data.GetFormDataRequest();
            if (object.auth != null) {
                if (typeof object.auth !== "object")
                    throw TypeError(".form_data.GetFormDataRequest.auth: object expected");
                message.auth = $root.auth.Authorization.fromObject(object.auth);
            }
            if (object.app != null) {
                if (typeof object.app !== "object")
                    throw TypeError(".form_data.GetFormDataRequest.app: object expected");
                message.app = $root.app.AppIndex.fromObject(object.app);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetFormDataRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof form_data.GetFormDataRequest
         * @static
         * @param {form_data.GetFormDataRequest} message GetFormDataRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetFormDataRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.auth = null;
                object.app = null;
            }
            if (message.auth != null && message.hasOwnProperty("auth"))
                object.auth = $root.auth.Authorization.toObject(message.auth, options);
            if (message.app != null && message.hasOwnProperty("app"))
                object.app = $root.app.AppIndex.toObject(message.app, options);
            return object;
        };

        /**
         * Converts this GetFormDataRequest to JSON.
         * @function toJSON
         * @memberof form_data.GetFormDataRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetFormDataRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetFormDataRequest
         * @function getTypeUrl
         * @memberof form_data.GetFormDataRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetFormDataRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/form_data.GetFormDataRequest";
        };

        return GetFormDataRequest;
    })();

    form_data.GetFormDataByPasswdRequest = (function() {

        /**
         * Properties of a GetFormDataByPasswdRequest.
         * @memberof form_data
         * @interface IGetFormDataByPasswdRequest
         * @property {app.IAppIndex|null} [app] GetFormDataByPasswdRequest app
         * @property {string|null} [passwd] GetFormDataByPasswdRequest passwd
         */

        /**
         * Constructs a new GetFormDataByPasswdRequest.
         * @memberof form_data
         * @classdesc Represents a GetFormDataByPasswdRequest.
         * @implements IGetFormDataByPasswdRequest
         * @constructor
         * @param {form_data.IGetFormDataByPasswdRequest=} [properties] Properties to set
         */
        function GetFormDataByPasswdRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetFormDataByPasswdRequest app.
         * @member {app.IAppIndex|null|undefined} app
         * @memberof form_data.GetFormDataByPasswdRequest
         * @instance
         */
        GetFormDataByPasswdRequest.prototype.app = null;

        /**
         * GetFormDataByPasswdRequest passwd.
         * @member {string} passwd
         * @memberof form_data.GetFormDataByPasswdRequest
         * @instance
         */
        GetFormDataByPasswdRequest.prototype.passwd = "";

        /**
         * Creates a new GetFormDataByPasswdRequest instance using the specified properties.
         * @function create
         * @memberof form_data.GetFormDataByPasswdRequest
         * @static
         * @param {form_data.IGetFormDataByPasswdRequest=} [properties] Properties to set
         * @returns {form_data.GetFormDataByPasswdRequest} GetFormDataByPasswdRequest instance
         */
        GetFormDataByPasswdRequest.create = function create(properties) {
            return new GetFormDataByPasswdRequest(properties);
        };

        /**
         * Encodes the specified GetFormDataByPasswdRequest message. Does not implicitly {@link form_data.GetFormDataByPasswdRequest.verify|verify} messages.
         * @function encode
         * @memberof form_data.GetFormDataByPasswdRequest
         * @static
         * @param {form_data.IGetFormDataByPasswdRequest} message GetFormDataByPasswdRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetFormDataByPasswdRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.app != null && Object.hasOwnProperty.call(message, "app"))
                $root.app.AppIndex.encode(message.app, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.passwd != null && Object.hasOwnProperty.call(message, "passwd"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.passwd);
            return writer;
        };

        /**
         * Encodes the specified GetFormDataByPasswdRequest message, length delimited. Does not implicitly {@link form_data.GetFormDataByPasswdRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof form_data.GetFormDataByPasswdRequest
         * @static
         * @param {form_data.IGetFormDataByPasswdRequest} message GetFormDataByPasswdRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetFormDataByPasswdRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetFormDataByPasswdRequest message from the specified reader or buffer.
         * @function decode
         * @memberof form_data.GetFormDataByPasswdRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {form_data.GetFormDataByPasswdRequest} GetFormDataByPasswdRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetFormDataByPasswdRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.form_data.GetFormDataByPasswdRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 2: {
                        message.app = $root.app.AppIndex.decode(reader, reader.uint32());
                        break;
                    }
                case 13: {
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
         * Decodes a GetFormDataByPasswdRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof form_data.GetFormDataByPasswdRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {form_data.GetFormDataByPasswdRequest} GetFormDataByPasswdRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetFormDataByPasswdRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetFormDataByPasswdRequest message.
         * @function verify
         * @memberof form_data.GetFormDataByPasswdRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetFormDataByPasswdRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.app != null && message.hasOwnProperty("app")) {
                var error = $root.app.AppIndex.verify(message.app);
                if (error)
                    return "app." + error;
            }
            if (message.passwd != null && message.hasOwnProperty("passwd"))
                if (!$util.isString(message.passwd))
                    return "passwd: string expected";
            return null;
        };

        /**
         * Creates a GetFormDataByPasswdRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof form_data.GetFormDataByPasswdRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {form_data.GetFormDataByPasswdRequest} GetFormDataByPasswdRequest
         */
        GetFormDataByPasswdRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.form_data.GetFormDataByPasswdRequest)
                return object;
            var message = new $root.form_data.GetFormDataByPasswdRequest();
            if (object.app != null) {
                if (typeof object.app !== "object")
                    throw TypeError(".form_data.GetFormDataByPasswdRequest.app: object expected");
                message.app = $root.app.AppIndex.fromObject(object.app);
            }
            if (object.passwd != null)
                message.passwd = String(object.passwd);
            return message;
        };

        /**
         * Creates a plain object from a GetFormDataByPasswdRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof form_data.GetFormDataByPasswdRequest
         * @static
         * @param {form_data.GetFormDataByPasswdRequest} message GetFormDataByPasswdRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetFormDataByPasswdRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.app = null;
                object.passwd = "";
            }
            if (message.app != null && message.hasOwnProperty("app"))
                object.app = $root.app.AppIndex.toObject(message.app, options);
            if (message.passwd != null && message.hasOwnProperty("passwd"))
                object.passwd = message.passwd;
            return object;
        };

        /**
         * Converts this GetFormDataByPasswdRequest to JSON.
         * @function toJSON
         * @memberof form_data.GetFormDataByPasswdRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetFormDataByPasswdRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetFormDataByPasswdRequest
         * @function getTypeUrl
         * @memberof form_data.GetFormDataByPasswdRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetFormDataByPasswdRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/form_data.GetFormDataByPasswdRequest";
        };

        return GetFormDataByPasswdRequest;
    })();

    form_data.CancelFormDataRequest = (function() {

        /**
         * Properties of a CancelFormDataRequest.
         * @memberof form_data
         * @interface ICancelFormDataRequest
         * @property {auth.IAuthorization|null} [auth] CancelFormDataRequest auth
         * @property {app.IAppIndex|null} [app] CancelFormDataRequest app
         */

        /**
         * Constructs a new CancelFormDataRequest.
         * @memberof form_data
         * @classdesc Represents a CancelFormDataRequest.
         * @implements ICancelFormDataRequest
         * @constructor
         * @param {form_data.ICancelFormDataRequest=} [properties] Properties to set
         */
        function CancelFormDataRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CancelFormDataRequest auth.
         * @member {auth.IAuthorization|null|undefined} auth
         * @memberof form_data.CancelFormDataRequest
         * @instance
         */
        CancelFormDataRequest.prototype.auth = null;

        /**
         * CancelFormDataRequest app.
         * @member {app.IAppIndex|null|undefined} app
         * @memberof form_data.CancelFormDataRequest
         * @instance
         */
        CancelFormDataRequest.prototype.app = null;

        /**
         * Creates a new CancelFormDataRequest instance using the specified properties.
         * @function create
         * @memberof form_data.CancelFormDataRequest
         * @static
         * @param {form_data.ICancelFormDataRequest=} [properties] Properties to set
         * @returns {form_data.CancelFormDataRequest} CancelFormDataRequest instance
         */
        CancelFormDataRequest.create = function create(properties) {
            return new CancelFormDataRequest(properties);
        };

        /**
         * Encodes the specified CancelFormDataRequest message. Does not implicitly {@link form_data.CancelFormDataRequest.verify|verify} messages.
         * @function encode
         * @memberof form_data.CancelFormDataRequest
         * @static
         * @param {form_data.ICancelFormDataRequest} message CancelFormDataRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelFormDataRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.auth != null && Object.hasOwnProperty.call(message, "auth"))
                $root.auth.Authorization.encode(message.auth, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.app != null && Object.hasOwnProperty.call(message, "app"))
                $root.app.AppIndex.encode(message.app, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CancelFormDataRequest message, length delimited. Does not implicitly {@link form_data.CancelFormDataRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof form_data.CancelFormDataRequest
         * @static
         * @param {form_data.ICancelFormDataRequest} message CancelFormDataRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelFormDataRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CancelFormDataRequest message from the specified reader or buffer.
         * @function decode
         * @memberof form_data.CancelFormDataRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {form_data.CancelFormDataRequest} CancelFormDataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelFormDataRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.form_data.CancelFormDataRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.auth = $root.auth.Authorization.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.app = $root.app.AppIndex.decode(reader, reader.uint32());
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
         * Decodes a CancelFormDataRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof form_data.CancelFormDataRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {form_data.CancelFormDataRequest} CancelFormDataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelFormDataRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CancelFormDataRequest message.
         * @function verify
         * @memberof form_data.CancelFormDataRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CancelFormDataRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.auth != null && message.hasOwnProperty("auth")) {
                var error = $root.auth.Authorization.verify(message.auth);
                if (error)
                    return "auth." + error;
            }
            if (message.app != null && message.hasOwnProperty("app")) {
                var error = $root.app.AppIndex.verify(message.app);
                if (error)
                    return "app." + error;
            }
            return null;
        };

        /**
         * Creates a CancelFormDataRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof form_data.CancelFormDataRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {form_data.CancelFormDataRequest} CancelFormDataRequest
         */
        CancelFormDataRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.form_data.CancelFormDataRequest)
                return object;
            var message = new $root.form_data.CancelFormDataRequest();
            if (object.auth != null) {
                if (typeof object.auth !== "object")
                    throw TypeError(".form_data.CancelFormDataRequest.auth: object expected");
                message.auth = $root.auth.Authorization.fromObject(object.auth);
            }
            if (object.app != null) {
                if (typeof object.app !== "object")
                    throw TypeError(".form_data.CancelFormDataRequest.app: object expected");
                message.app = $root.app.AppIndex.fromObject(object.app);
            }
            return message;
        };

        /**
         * Creates a plain object from a CancelFormDataRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof form_data.CancelFormDataRequest
         * @static
         * @param {form_data.CancelFormDataRequest} message CancelFormDataRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CancelFormDataRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.auth = null;
                object.app = null;
            }
            if (message.auth != null && message.hasOwnProperty("auth"))
                object.auth = $root.auth.Authorization.toObject(message.auth, options);
            if (message.app != null && message.hasOwnProperty("app"))
                object.app = $root.app.AppIndex.toObject(message.app, options);
            return object;
        };

        /**
         * Converts this CancelFormDataRequest to JSON.
         * @function toJSON
         * @memberof form_data.CancelFormDataRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CancelFormDataRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CancelFormDataRequest
         * @function getTypeUrl
         * @memberof form_data.CancelFormDataRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CancelFormDataRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/form_data.CancelFormDataRequest";
        };

        return CancelFormDataRequest;
    })();

    form_data.FinishFormDataRequest = (function() {

        /**
         * Properties of a FinishFormDataRequest.
         * @memberof form_data
         * @interface IFinishFormDataRequest
         * @property {auth.IAuthorization|null} [auth] FinishFormDataRequest auth
         * @property {app.IAppIndex|null} [app] FinishFormDataRequest app
         * @property {string|null} [passwd] FinishFormDataRequest passwd
         */

        /**
         * Constructs a new FinishFormDataRequest.
         * @memberof form_data
         * @classdesc Represents a FinishFormDataRequest.
         * @implements IFinishFormDataRequest
         * @constructor
         * @param {form_data.IFinishFormDataRequest=} [properties] Properties to set
         */
        function FinishFormDataRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FinishFormDataRequest auth.
         * @member {auth.IAuthorization|null|undefined} auth
         * @memberof form_data.FinishFormDataRequest
         * @instance
         */
        FinishFormDataRequest.prototype.auth = null;

        /**
         * FinishFormDataRequest app.
         * @member {app.IAppIndex|null|undefined} app
         * @memberof form_data.FinishFormDataRequest
         * @instance
         */
        FinishFormDataRequest.prototype.app = null;

        /**
         * FinishFormDataRequest passwd.
         * @member {string} passwd
         * @memberof form_data.FinishFormDataRequest
         * @instance
         */
        FinishFormDataRequest.prototype.passwd = "";

        /**
         * Creates a new FinishFormDataRequest instance using the specified properties.
         * @function create
         * @memberof form_data.FinishFormDataRequest
         * @static
         * @param {form_data.IFinishFormDataRequest=} [properties] Properties to set
         * @returns {form_data.FinishFormDataRequest} FinishFormDataRequest instance
         */
        FinishFormDataRequest.create = function create(properties) {
            return new FinishFormDataRequest(properties);
        };

        /**
         * Encodes the specified FinishFormDataRequest message. Does not implicitly {@link form_data.FinishFormDataRequest.verify|verify} messages.
         * @function encode
         * @memberof form_data.FinishFormDataRequest
         * @static
         * @param {form_data.IFinishFormDataRequest} message FinishFormDataRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FinishFormDataRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.auth != null && Object.hasOwnProperty.call(message, "auth"))
                $root.auth.Authorization.encode(message.auth, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.app != null && Object.hasOwnProperty.call(message, "app"))
                $root.app.AppIndex.encode(message.app, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.passwd != null && Object.hasOwnProperty.call(message, "passwd"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.passwd);
            return writer;
        };

        /**
         * Encodes the specified FinishFormDataRequest message, length delimited. Does not implicitly {@link form_data.FinishFormDataRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof form_data.FinishFormDataRequest
         * @static
         * @param {form_data.IFinishFormDataRequest} message FinishFormDataRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FinishFormDataRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FinishFormDataRequest message from the specified reader or buffer.
         * @function decode
         * @memberof form_data.FinishFormDataRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {form_data.FinishFormDataRequest} FinishFormDataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FinishFormDataRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.form_data.FinishFormDataRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.auth = $root.auth.Authorization.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.app = $root.app.AppIndex.decode(reader, reader.uint32());
                        break;
                    }
                case 13: {
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
         * Decodes a FinishFormDataRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof form_data.FinishFormDataRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {form_data.FinishFormDataRequest} FinishFormDataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FinishFormDataRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FinishFormDataRequest message.
         * @function verify
         * @memberof form_data.FinishFormDataRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FinishFormDataRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.auth != null && message.hasOwnProperty("auth")) {
                var error = $root.auth.Authorization.verify(message.auth);
                if (error)
                    return "auth." + error;
            }
            if (message.app != null && message.hasOwnProperty("app")) {
                var error = $root.app.AppIndex.verify(message.app);
                if (error)
                    return "app." + error;
            }
            if (message.passwd != null && message.hasOwnProperty("passwd"))
                if (!$util.isString(message.passwd))
                    return "passwd: string expected";
            return null;
        };

        /**
         * Creates a FinishFormDataRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof form_data.FinishFormDataRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {form_data.FinishFormDataRequest} FinishFormDataRequest
         */
        FinishFormDataRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.form_data.FinishFormDataRequest)
                return object;
            var message = new $root.form_data.FinishFormDataRequest();
            if (object.auth != null) {
                if (typeof object.auth !== "object")
                    throw TypeError(".form_data.FinishFormDataRequest.auth: object expected");
                message.auth = $root.auth.Authorization.fromObject(object.auth);
            }
            if (object.app != null) {
                if (typeof object.app !== "object")
                    throw TypeError(".form_data.FinishFormDataRequest.app: object expected");
                message.app = $root.app.AppIndex.fromObject(object.app);
            }
            if (object.passwd != null)
                message.passwd = String(object.passwd);
            return message;
        };

        /**
         * Creates a plain object from a FinishFormDataRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof form_data.FinishFormDataRequest
         * @static
         * @param {form_data.FinishFormDataRequest} message FinishFormDataRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FinishFormDataRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.auth = null;
                object.app = null;
                object.passwd = "";
            }
            if (message.auth != null && message.hasOwnProperty("auth"))
                object.auth = $root.auth.Authorization.toObject(message.auth, options);
            if (message.app != null && message.hasOwnProperty("app"))
                object.app = $root.app.AppIndex.toObject(message.app, options);
            if (message.passwd != null && message.hasOwnProperty("passwd"))
                object.passwd = message.passwd;
            return object;
        };

        /**
         * Converts this FinishFormDataRequest to JSON.
         * @function toJSON
         * @memberof form_data.FinishFormDataRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FinishFormDataRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FinishFormDataRequest
         * @function getTypeUrl
         * @memberof form_data.FinishFormDataRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FinishFormDataRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/form_data.FinishFormDataRequest";
        };

        return FinishFormDataRequest;
    })();

    /**
     * Status enum.
     * @name form_data.Status
     * @enum {number}
     * @property {number} NONE=0 NONE value
     * @property {number} WAIT_PAY=1 WAIT_PAY value
     * @property {number} WAIT_RECV=2 WAIT_RECV value
     * @property {number} FINISH=3 FINISH value
     */
    form_data.Status = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NONE"] = 0;
        values[valuesById[1] = "WAIT_PAY"] = 1;
        values[valuesById[2] = "WAIT_RECV"] = 2;
        values[valuesById[3] = "FINISH"] = 3;
        return values;
    })();

    form_data.FormData = (function() {

        /**
         * Properties of a FormData.
         * @memberof form_data
         * @interface IFormData
         * @property {string|null} [form] FormData form
         * @property {string|null} [passwd] FormData passwd
         * @property {form_data.Status|null} [status] FormData status
         */

        /**
         * Constructs a new FormData.
         * @memberof form_data
         * @classdesc Represents a FormData.
         * @implements IFormData
         * @constructor
         * @param {form_data.IFormData=} [properties] Properties to set
         */
        function FormData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FormData form.
         * @member {string} form
         * @memberof form_data.FormData
         * @instance
         */
        FormData.prototype.form = "";

        /**
         * FormData passwd.
         * @member {string} passwd
         * @memberof form_data.FormData
         * @instance
         */
        FormData.prototype.passwd = "";

        /**
         * FormData status.
         * @member {form_data.Status} status
         * @memberof form_data.FormData
         * @instance
         */
        FormData.prototype.status = 0;

        /**
         * Creates a new FormData instance using the specified properties.
         * @function create
         * @memberof form_data.FormData
         * @static
         * @param {form_data.IFormData=} [properties] Properties to set
         * @returns {form_data.FormData} FormData instance
         */
        FormData.create = function create(properties) {
            return new FormData(properties);
        };

        /**
         * Encodes the specified FormData message. Does not implicitly {@link form_data.FormData.verify|verify} messages.
         * @function encode
         * @memberof form_data.FormData
         * @static
         * @param {form_data.IFormData} message FormData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FormData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.form != null && Object.hasOwnProperty.call(message, "form"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.form);
            if (message.passwd != null && Object.hasOwnProperty.call(message, "passwd"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.passwd);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 21, wireType 0 =*/168).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified FormData message, length delimited. Does not implicitly {@link form_data.FormData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof form_data.FormData
         * @static
         * @param {form_data.IFormData} message FormData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FormData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FormData message from the specified reader or buffer.
         * @function decode
         * @memberof form_data.FormData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {form_data.FormData} FormData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FormData.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.form_data.FormData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 12: {
                        message.form = reader.string();
                        break;
                    }
                case 13: {
                        message.passwd = reader.string();
                        break;
                    }
                case 21: {
                        message.status = reader.int32();
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
         * Decodes a FormData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof form_data.FormData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {form_data.FormData} FormData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FormData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FormData message.
         * @function verify
         * @memberof form_data.FormData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FormData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.form != null && message.hasOwnProperty("form"))
                if (!$util.isString(message.form))
                    return "form: string expected";
            if (message.passwd != null && message.hasOwnProperty("passwd"))
                if (!$util.isString(message.passwd))
                    return "passwd: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };

        /**
         * Creates a FormData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof form_data.FormData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {form_data.FormData} FormData
         */
        FormData.fromObject = function fromObject(object) {
            if (object instanceof $root.form_data.FormData)
                return object;
            var message = new $root.form_data.FormData();
            if (object.form != null)
                message.form = String(object.form);
            if (object.passwd != null)
                message.passwd = String(object.passwd);
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "NONE":
            case 0:
                message.status = 0;
                break;
            case "WAIT_PAY":
            case 1:
                message.status = 1;
                break;
            case "WAIT_RECV":
            case 2:
                message.status = 2;
                break;
            case "FINISH":
            case 3:
                message.status = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a FormData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof form_data.FormData
         * @static
         * @param {form_data.FormData} message FormData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FormData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.form = "";
                object.passwd = "";
                object.status = options.enums === String ? "NONE" : 0;
            }
            if (message.form != null && message.hasOwnProperty("form"))
                object.form = message.form;
            if (message.passwd != null && message.hasOwnProperty("passwd"))
                object.passwd = message.passwd;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.form_data.Status[message.status] === undefined ? message.status : $root.form_data.Status[message.status] : message.status;
            return object;
        };

        /**
         * Converts this FormData to JSON.
         * @function toJSON
         * @memberof form_data.FormData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FormData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FormData
         * @function getTypeUrl
         * @memberof form_data.FormData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FormData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/form_data.FormData";
        };

        return FormData;
    })();

    form_data.FormDataService = (function() {

        /**
         * Constructs a new FormDataService service.
         * @memberof form_data
         * @classdesc Represents a FormDataService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function FormDataService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (FormDataService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = FormDataService;

        /**
         * Creates new FormDataService service using the specified rpc implementation.
         * @function create
         * @memberof form_data.FormDataService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {FormDataService} RPC service. Useful where requests and/or responses are streamed.
         */
        FormDataService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link form_data.FormDataService#getFormData}.
         * @memberof form_data.FormDataService
         * @typedef GetFormDataCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {form_data.FormData} [response] FormData
         */

        /**
         * Calls GetFormData.
         * @function getFormData
         * @memberof form_data.FormDataService
         * @instance
         * @param {form_data.IGetFormDataRequest} request GetFormDataRequest message or plain object
         * @param {form_data.FormDataService.GetFormDataCallback} callback Node-style callback called with the error, if any, and FormData
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(FormDataService.prototype.getFormData = function getFormData(request, callback) {
            return this.rpcCall(getFormData, $root.form_data.GetFormDataRequest, $root.form_data.FormData, request, callback);
        }, "name", { value: "GetFormData" });

        /**
         * Calls GetFormData.
         * @function getFormData
         * @memberof form_data.FormDataService
         * @instance
         * @param {form_data.IGetFormDataRequest} request GetFormDataRequest message or plain object
         * @returns {Promise<form_data.FormData>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link form_data.FormDataService#getFormDataByPasswd}.
         * @memberof form_data.FormDataService
         * @typedef GetFormDataByPasswdCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {form_data.FormData} [response] FormData
         */

        /**
         * Calls GetFormDataByPasswd.
         * @function getFormDataByPasswd
         * @memberof form_data.FormDataService
         * @instance
         * @param {form_data.IGetFormDataByPasswdRequest} request GetFormDataByPasswdRequest message or plain object
         * @param {form_data.FormDataService.GetFormDataByPasswdCallback} callback Node-style callback called with the error, if any, and FormData
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(FormDataService.prototype.getFormDataByPasswd = function getFormDataByPasswd(request, callback) {
            return this.rpcCall(getFormDataByPasswd, $root.form_data.GetFormDataByPasswdRequest, $root.form_data.FormData, request, callback);
        }, "name", { value: "GetFormDataByPasswd" });

        /**
         * Calls GetFormDataByPasswd.
         * @function getFormDataByPasswd
         * @memberof form_data.FormDataService
         * @instance
         * @param {form_data.IGetFormDataByPasswdRequest} request GetFormDataByPasswdRequest message or plain object
         * @returns {Promise<form_data.FormData>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link form_data.FormDataService#submitFormData}.
         * @memberof form_data.FormDataService
         * @typedef SubmitFormDataCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pay.PayRequest} [response] PayRequest
         */

        /**
         * Calls SubmitFormData.
         * @function submitFormData
         * @memberof form_data.FormDataService
         * @instance
         * @param {form_data.ISubmitFormDataRequest} request SubmitFormDataRequest message or plain object
         * @param {form_data.FormDataService.SubmitFormDataCallback} callback Node-style callback called with the error, if any, and PayRequest
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(FormDataService.prototype.submitFormData = function submitFormData(request, callback) {
            return this.rpcCall(submitFormData, $root.form_data.SubmitFormDataRequest, $root.pay.PayRequest, request, callback);
        }, "name", { value: "SubmitFormData" });

        /**
         * Calls SubmitFormData.
         * @function submitFormData
         * @memberof form_data.FormDataService
         * @instance
         * @param {form_data.ISubmitFormDataRequest} request SubmitFormDataRequest message or plain object
         * @returns {Promise<pay.PayRequest>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link form_data.FormDataService#cancelFormData}.
         * @memberof form_data.FormDataService
         * @typedef CancelFormDataCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {common.Empty} [response] Empty
         */

        /**
         * Calls CancelFormData.
         * @function cancelFormData
         * @memberof form_data.FormDataService
         * @instance
         * @param {form_data.ICancelFormDataRequest} request CancelFormDataRequest message or plain object
         * @param {form_data.FormDataService.CancelFormDataCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(FormDataService.prototype.cancelFormData = function cancelFormData(request, callback) {
            return this.rpcCall(cancelFormData, $root.form_data.CancelFormDataRequest, $root.common.Empty, request, callback);
        }, "name", { value: "CancelFormData" });

        /**
         * Calls CancelFormData.
         * @function cancelFormData
         * @memberof form_data.FormDataService
         * @instance
         * @param {form_data.ICancelFormDataRequest} request CancelFormDataRequest message or plain object
         * @returns {Promise<common.Empty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link form_data.FormDataService#finishFormData}.
         * @memberof form_data.FormDataService
         * @typedef FinishFormDataCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {common.Empty} [response] Empty
         */

        /**
         * Calls FinishFormData.
         * @function finishFormData
         * @memberof form_data.FormDataService
         * @instance
         * @param {form_data.IFinishFormDataRequest} request FinishFormDataRequest message or plain object
         * @param {form_data.FormDataService.FinishFormDataCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(FormDataService.prototype.finishFormData = function finishFormData(request, callback) {
            return this.rpcCall(finishFormData, $root.form_data.FinishFormDataRequest, $root.common.Empty, request, callback);
        }, "name", { value: "FinishFormData" });

        /**
         * Calls FinishFormData.
         * @function finishFormData
         * @memberof form_data.FormDataService
         * @instance
         * @param {form_data.IFinishFormDataRequest} request FinishFormDataRequest message or plain object
         * @returns {Promise<common.Empty>} Promise
         * @variation 2
         */

        return FormDataService;
    })();

    return form_data;
})();

$root.pay = (function() {

    /**
     * Namespace pay.
     * @exports pay
     * @namespace
     */
    var pay = {};

    pay.WechatPay = (function() {

        /**
         * Properties of a WechatPay.
         * @memberof pay
         * @interface IWechatPay
         * @property {string|null} [appId] WechatPay appId
         * @property {string|null} [timeStamp] WechatPay timeStamp
         * @property {string|null} [nonceStr] WechatPay nonceStr
         * @property {string|null} ["package"] WechatPay package
         * @property {string|null} [signType] WechatPay signType
         * @property {string|null} [paySign] WechatPay paySign
         */

        /**
         * Constructs a new WechatPay.
         * @memberof pay
         * @classdesc Represents a WechatPay.
         * @implements IWechatPay
         * @constructor
         * @param {pay.IWechatPay=} [properties] Properties to set
         */
        function WechatPay(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WechatPay appId.
         * @member {string} appId
         * @memberof pay.WechatPay
         * @instance
         */
        WechatPay.prototype.appId = "";

        /**
         * WechatPay timeStamp.
         * @member {string} timeStamp
         * @memberof pay.WechatPay
         * @instance
         */
        WechatPay.prototype.timeStamp = "";

        /**
         * WechatPay nonceStr.
         * @member {string} nonceStr
         * @memberof pay.WechatPay
         * @instance
         */
        WechatPay.prototype.nonceStr = "";

        /**
         * WechatPay package.
         * @member {string} package
         * @memberof pay.WechatPay
         * @instance
         */
        WechatPay.prototype["package"] = "";

        /**
         * WechatPay signType.
         * @member {string} signType
         * @memberof pay.WechatPay
         * @instance
         */
        WechatPay.prototype.signType = "";

        /**
         * WechatPay paySign.
         * @member {string} paySign
         * @memberof pay.WechatPay
         * @instance
         */
        WechatPay.prototype.paySign = "";

        /**
         * Creates a new WechatPay instance using the specified properties.
         * @function create
         * @memberof pay.WechatPay
         * @static
         * @param {pay.IWechatPay=} [properties] Properties to set
         * @returns {pay.WechatPay} WechatPay instance
         */
        WechatPay.create = function create(properties) {
            return new WechatPay(properties);
        };

        /**
         * Encodes the specified WechatPay message. Does not implicitly {@link pay.WechatPay.verify|verify} messages.
         * @function encode
         * @memberof pay.WechatPay
         * @static
         * @param {pay.IWechatPay} message WechatPay message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WechatPay.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appId != null && Object.hasOwnProperty.call(message, "appId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.appId);
            if (message.timeStamp != null && Object.hasOwnProperty.call(message, "timeStamp"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.timeStamp);
            if (message.nonceStr != null && Object.hasOwnProperty.call(message, "nonceStr"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nonceStr);
            if (message["package"] != null && Object.hasOwnProperty.call(message, "package"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message["package"]);
            if (message.signType != null && Object.hasOwnProperty.call(message, "signType"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.signType);
            if (message.paySign != null && Object.hasOwnProperty.call(message, "paySign"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.paySign);
            return writer;
        };

        /**
         * Encodes the specified WechatPay message, length delimited. Does not implicitly {@link pay.WechatPay.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pay.WechatPay
         * @static
         * @param {pay.IWechatPay} message WechatPay message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WechatPay.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WechatPay message from the specified reader or buffer.
         * @function decode
         * @memberof pay.WechatPay
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pay.WechatPay} WechatPay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WechatPay.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pay.WechatPay();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.appId = reader.string();
                        break;
                    }
                case 2: {
                        message.timeStamp = reader.string();
                        break;
                    }
                case 3: {
                        message.nonceStr = reader.string();
                        break;
                    }
                case 4: {
                        message["package"] = reader.string();
                        break;
                    }
                case 5: {
                        message.signType = reader.string();
                        break;
                    }
                case 6: {
                        message.paySign = reader.string();
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
         * Decodes a WechatPay message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pay.WechatPay
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pay.WechatPay} WechatPay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WechatPay.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WechatPay message.
         * @function verify
         * @memberof pay.WechatPay
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WechatPay.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appId != null && message.hasOwnProperty("appId"))
                if (!$util.isString(message.appId))
                    return "appId: string expected";
            if (message.timeStamp != null && message.hasOwnProperty("timeStamp"))
                if (!$util.isString(message.timeStamp))
                    return "timeStamp: string expected";
            if (message.nonceStr != null && message.hasOwnProperty("nonceStr"))
                if (!$util.isString(message.nonceStr))
                    return "nonceStr: string expected";
            if (message["package"] != null && message.hasOwnProperty("package"))
                if (!$util.isString(message["package"]))
                    return "package: string expected";
            if (message.signType != null && message.hasOwnProperty("signType"))
                if (!$util.isString(message.signType))
                    return "signType: string expected";
            if (message.paySign != null && message.hasOwnProperty("paySign"))
                if (!$util.isString(message.paySign))
                    return "paySign: string expected";
            return null;
        };

        /**
         * Creates a WechatPay message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pay.WechatPay
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pay.WechatPay} WechatPay
         */
        WechatPay.fromObject = function fromObject(object) {
            if (object instanceof $root.pay.WechatPay)
                return object;
            var message = new $root.pay.WechatPay();
            if (object.appId != null)
                message.appId = String(object.appId);
            if (object.timeStamp != null)
                message.timeStamp = String(object.timeStamp);
            if (object.nonceStr != null)
                message.nonceStr = String(object.nonceStr);
            if (object["package"] != null)
                message["package"] = String(object["package"]);
            if (object.signType != null)
                message.signType = String(object.signType);
            if (object.paySign != null)
                message.paySign = String(object.paySign);
            return message;
        };

        /**
         * Creates a plain object from a WechatPay message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pay.WechatPay
         * @static
         * @param {pay.WechatPay} message WechatPay
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WechatPay.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appId = "";
                object.timeStamp = "";
                object.nonceStr = "";
                object["package"] = "";
                object.signType = "";
                object.paySign = "";
            }
            if (message.appId != null && message.hasOwnProperty("appId"))
                object.appId = message.appId;
            if (message.timeStamp != null && message.hasOwnProperty("timeStamp"))
                object.timeStamp = message.timeStamp;
            if (message.nonceStr != null && message.hasOwnProperty("nonceStr"))
                object.nonceStr = message.nonceStr;
            if (message["package"] != null && message.hasOwnProperty("package"))
                object["package"] = message["package"];
            if (message.signType != null && message.hasOwnProperty("signType"))
                object.signType = message.signType;
            if (message.paySign != null && message.hasOwnProperty("paySign"))
                object.paySign = message.paySign;
            return object;
        };

        /**
         * Converts this WechatPay to JSON.
         * @function toJSON
         * @memberof pay.WechatPay
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WechatPay.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WechatPay
         * @function getTypeUrl
         * @memberof pay.WechatPay
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WechatPay.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pay.WechatPay";
        };

        return WechatPay;
    })();

    pay.PayRequest = (function() {

        /**
         * Properties of a PayRequest.
         * @memberof pay
         * @interface IPayRequest
         * @property {pay.IWechatPay|null} [wechat] PayRequest wechat
         */

        /**
         * Constructs a new PayRequest.
         * @memberof pay
         * @classdesc Represents a PayRequest.
         * @implements IPayRequest
         * @constructor
         * @param {pay.IPayRequest=} [properties] Properties to set
         */
        function PayRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PayRequest wechat.
         * @member {pay.IWechatPay|null|undefined} wechat
         * @memberof pay.PayRequest
         * @instance
         */
        PayRequest.prototype.wechat = null;

        /**
         * Creates a new PayRequest instance using the specified properties.
         * @function create
         * @memberof pay.PayRequest
         * @static
         * @param {pay.IPayRequest=} [properties] Properties to set
         * @returns {pay.PayRequest} PayRequest instance
         */
        PayRequest.create = function create(properties) {
            return new PayRequest(properties);
        };

        /**
         * Encodes the specified PayRequest message. Does not implicitly {@link pay.PayRequest.verify|verify} messages.
         * @function encode
         * @memberof pay.PayRequest
         * @static
         * @param {pay.IPayRequest} message PayRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PayRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.wechat != null && Object.hasOwnProperty.call(message, "wechat"))
                $root.pay.WechatPay.encode(message.wechat, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PayRequest message, length delimited. Does not implicitly {@link pay.PayRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pay.PayRequest
         * @static
         * @param {pay.IPayRequest} message PayRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PayRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PayRequest message from the specified reader or buffer.
         * @function decode
         * @memberof pay.PayRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pay.PayRequest} PayRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PayRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pay.PayRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.wechat = $root.pay.WechatPay.decode(reader, reader.uint32());
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
         * Decodes a PayRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pay.PayRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pay.PayRequest} PayRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PayRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PayRequest message.
         * @function verify
         * @memberof pay.PayRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PayRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.wechat != null && message.hasOwnProperty("wechat")) {
                var error = $root.pay.WechatPay.verify(message.wechat);
                if (error)
                    return "wechat." + error;
            }
            return null;
        };

        /**
         * Creates a PayRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pay.PayRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pay.PayRequest} PayRequest
         */
        PayRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.pay.PayRequest)
                return object;
            var message = new $root.pay.PayRequest();
            if (object.wechat != null) {
                if (typeof object.wechat !== "object")
                    throw TypeError(".pay.PayRequest.wechat: object expected");
                message.wechat = $root.pay.WechatPay.fromObject(object.wechat);
            }
            return message;
        };

        /**
         * Creates a plain object from a PayRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pay.PayRequest
         * @static
         * @param {pay.PayRequest} message PayRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PayRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.wechat = null;
            if (message.wechat != null && message.hasOwnProperty("wechat"))
                object.wechat = $root.pay.WechatPay.toObject(message.wechat, options);
            return object;
        };

        /**
         * Converts this PayRequest to JSON.
         * @function toJSON
         * @memberof pay.PayRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PayRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PayRequest
         * @function getTypeUrl
         * @memberof pay.PayRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PayRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pay.PayRequest";
        };

        return PayRequest;
    })();

    pay.SetMerchantRequest = (function() {

        /**
         * Properties of a SetMerchantRequest.
         * @memberof pay
         * @interface ISetMerchantRequest
         * @property {auth.IAuthorization|null} [auth] SetMerchantRequest auth
         * @property {number|null} [pay_id] SetMerchantRequest pay_id
         * @property {string|null} [kind] SetMerchantRequest kind
         * @property {string|null} [mchid] SetMerchantRequest mchid
         * @property {string|null} [key] SetMerchantRequest key
         * @property {string|null} [api_id] SetMerchantRequest api_id
         * @property {string|null} [api_key] SetMerchantRequest api_key
         */

        /**
         * Constructs a new SetMerchantRequest.
         * @memberof pay
         * @classdesc Represents a SetMerchantRequest.
         * @implements ISetMerchantRequest
         * @constructor
         * @param {pay.ISetMerchantRequest=} [properties] Properties to set
         */
        function SetMerchantRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetMerchantRequest auth.
         * @member {auth.IAuthorization|null|undefined} auth
         * @memberof pay.SetMerchantRequest
         * @instance
         */
        SetMerchantRequest.prototype.auth = null;

        /**
         * SetMerchantRequest pay_id.
         * @member {number} pay_id
         * @memberof pay.SetMerchantRequest
         * @instance
         */
        SetMerchantRequest.prototype.pay_id = 0;

        /**
         * SetMerchantRequest kind.
         * @member {string} kind
         * @memberof pay.SetMerchantRequest
         * @instance
         */
        SetMerchantRequest.prototype.kind = "";

        /**
         * SetMerchantRequest mchid.
         * @member {string} mchid
         * @memberof pay.SetMerchantRequest
         * @instance
         */
        SetMerchantRequest.prototype.mchid = "";

        /**
         * SetMerchantRequest key.
         * @member {string} key
         * @memberof pay.SetMerchantRequest
         * @instance
         */
        SetMerchantRequest.prototype.key = "";

        /**
         * SetMerchantRequest api_id.
         * @member {string} api_id
         * @memberof pay.SetMerchantRequest
         * @instance
         */
        SetMerchantRequest.prototype.api_id = "";

        /**
         * SetMerchantRequest api_key.
         * @member {string} api_key
         * @memberof pay.SetMerchantRequest
         * @instance
         */
        SetMerchantRequest.prototype.api_key = "";

        /**
         * Creates a new SetMerchantRequest instance using the specified properties.
         * @function create
         * @memberof pay.SetMerchantRequest
         * @static
         * @param {pay.ISetMerchantRequest=} [properties] Properties to set
         * @returns {pay.SetMerchantRequest} SetMerchantRequest instance
         */
        SetMerchantRequest.create = function create(properties) {
            return new SetMerchantRequest(properties);
        };

        /**
         * Encodes the specified SetMerchantRequest message. Does not implicitly {@link pay.SetMerchantRequest.verify|verify} messages.
         * @function encode
         * @memberof pay.SetMerchantRequest
         * @static
         * @param {pay.ISetMerchantRequest} message SetMerchantRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetMerchantRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.auth != null && Object.hasOwnProperty.call(message, "auth"))
                $root.auth.Authorization.encode(message.auth, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.pay_id != null && Object.hasOwnProperty.call(message, "pay_id"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.pay_id);
            if (message.kind != null && Object.hasOwnProperty.call(message, "kind"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.kind);
            if (message.mchid != null && Object.hasOwnProperty.call(message, "mchid"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.mchid);
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.key);
            if (message.api_id != null && Object.hasOwnProperty.call(message, "api_id"))
                writer.uint32(/* id 21, wireType 2 =*/170).string(message.api_id);
            if (message.api_key != null && Object.hasOwnProperty.call(message, "api_key"))
                writer.uint32(/* id 22, wireType 2 =*/178).string(message.api_key);
            return writer;
        };

        /**
         * Encodes the specified SetMerchantRequest message, length delimited. Does not implicitly {@link pay.SetMerchantRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pay.SetMerchantRequest
         * @static
         * @param {pay.ISetMerchantRequest} message SetMerchantRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetMerchantRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetMerchantRequest message from the specified reader or buffer.
         * @function decode
         * @memberof pay.SetMerchantRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pay.SetMerchantRequest} SetMerchantRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetMerchantRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pay.SetMerchantRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.auth = $root.auth.Authorization.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.pay_id = reader.uint32();
                        break;
                    }
                case 10: {
                        message.kind = reader.string();
                        break;
                    }
                case 11: {
                        message.mchid = reader.string();
                        break;
                    }
                case 12: {
                        message.key = reader.string();
                        break;
                    }
                case 21: {
                        message.api_id = reader.string();
                        break;
                    }
                case 22: {
                        message.api_key = reader.string();
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
         * Decodes a SetMerchantRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pay.SetMerchantRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pay.SetMerchantRequest} SetMerchantRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetMerchantRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetMerchantRequest message.
         * @function verify
         * @memberof pay.SetMerchantRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetMerchantRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.auth != null && message.hasOwnProperty("auth")) {
                var error = $root.auth.Authorization.verify(message.auth);
                if (error)
                    return "auth." + error;
            }
            if (message.pay_id != null && message.hasOwnProperty("pay_id"))
                if (!$util.isInteger(message.pay_id))
                    return "pay_id: integer expected";
            if (message.kind != null && message.hasOwnProperty("kind"))
                if (!$util.isString(message.kind))
                    return "kind: string expected";
            if (message.mchid != null && message.hasOwnProperty("mchid"))
                if (!$util.isString(message.mchid))
                    return "mchid: string expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.api_id != null && message.hasOwnProperty("api_id"))
                if (!$util.isString(message.api_id))
                    return "api_id: string expected";
            if (message.api_key != null && message.hasOwnProperty("api_key"))
                if (!$util.isString(message.api_key))
                    return "api_key: string expected";
            return null;
        };

        /**
         * Creates a SetMerchantRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pay.SetMerchantRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pay.SetMerchantRequest} SetMerchantRequest
         */
        SetMerchantRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.pay.SetMerchantRequest)
                return object;
            var message = new $root.pay.SetMerchantRequest();
            if (object.auth != null) {
                if (typeof object.auth !== "object")
                    throw TypeError(".pay.SetMerchantRequest.auth: object expected");
                message.auth = $root.auth.Authorization.fromObject(object.auth);
            }
            if (object.pay_id != null)
                message.pay_id = object.pay_id >>> 0;
            if (object.kind != null)
                message.kind = String(object.kind);
            if (object.mchid != null)
                message.mchid = String(object.mchid);
            if (object.key != null)
                message.key = String(object.key);
            if (object.api_id != null)
                message.api_id = String(object.api_id);
            if (object.api_key != null)
                message.api_key = String(object.api_key);
            return message;
        };

        /**
         * Creates a plain object from a SetMerchantRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pay.SetMerchantRequest
         * @static
         * @param {pay.SetMerchantRequest} message SetMerchantRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetMerchantRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.auth = null;
                object.pay_id = 0;
                object.kind = "";
                object.mchid = "";
                object.key = "";
                object.api_id = "";
                object.api_key = "";
            }
            if (message.auth != null && message.hasOwnProperty("auth"))
                object.auth = $root.auth.Authorization.toObject(message.auth, options);
            if (message.pay_id != null && message.hasOwnProperty("pay_id"))
                object.pay_id = message.pay_id;
            if (message.kind != null && message.hasOwnProperty("kind"))
                object.kind = message.kind;
            if (message.mchid != null && message.hasOwnProperty("mchid"))
                object.mchid = message.mchid;
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.api_id != null && message.hasOwnProperty("api_id"))
                object.api_id = message.api_id;
            if (message.api_key != null && message.hasOwnProperty("api_key"))
                object.api_key = message.api_key;
            return object;
        };

        /**
         * Converts this SetMerchantRequest to JSON.
         * @function toJSON
         * @memberof pay.SetMerchantRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetMerchantRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetMerchantRequest
         * @function getTypeUrl
         * @memberof pay.SetMerchantRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetMerchantRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pay.SetMerchantRequest";
        };

        return SetMerchantRequest;
    })();

    pay.AuthMerchantRequest = (function() {

        /**
         * Properties of an AuthMerchantRequest.
         * @memberof pay
         * @interface IAuthMerchantRequest
         * @property {auth.IAuthorization|null} [auth] AuthMerchantRequest auth
         * @property {number|null} [pay_id] AuthMerchantRequest pay_id
         * @property {number|null} [user_id] AuthMerchantRequest user_id
         */

        /**
         * Constructs a new AuthMerchantRequest.
         * @memberof pay
         * @classdesc Represents an AuthMerchantRequest.
         * @implements IAuthMerchantRequest
         * @constructor
         * @param {pay.IAuthMerchantRequest=} [properties] Properties to set
         */
        function AuthMerchantRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AuthMerchantRequest auth.
         * @member {auth.IAuthorization|null|undefined} auth
         * @memberof pay.AuthMerchantRequest
         * @instance
         */
        AuthMerchantRequest.prototype.auth = null;

        /**
         * AuthMerchantRequest pay_id.
         * @member {number} pay_id
         * @memberof pay.AuthMerchantRequest
         * @instance
         */
        AuthMerchantRequest.prototype.pay_id = 0;

        /**
         * AuthMerchantRequest user_id.
         * @member {number} user_id
         * @memberof pay.AuthMerchantRequest
         * @instance
         */
        AuthMerchantRequest.prototype.user_id = 0;

        /**
         * Creates a new AuthMerchantRequest instance using the specified properties.
         * @function create
         * @memberof pay.AuthMerchantRequest
         * @static
         * @param {pay.IAuthMerchantRequest=} [properties] Properties to set
         * @returns {pay.AuthMerchantRequest} AuthMerchantRequest instance
         */
        AuthMerchantRequest.create = function create(properties) {
            return new AuthMerchantRequest(properties);
        };

        /**
         * Encodes the specified AuthMerchantRequest message. Does not implicitly {@link pay.AuthMerchantRequest.verify|verify} messages.
         * @function encode
         * @memberof pay.AuthMerchantRequest
         * @static
         * @param {pay.IAuthMerchantRequest} message AuthMerchantRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthMerchantRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.auth != null && Object.hasOwnProperty.call(message, "auth"))
                $root.auth.Authorization.encode(message.auth, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.pay_id != null && Object.hasOwnProperty.call(message, "pay_id"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.pay_id);
            if (message.user_id != null && Object.hasOwnProperty.call(message, "user_id"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.user_id);
            return writer;
        };

        /**
         * Encodes the specified AuthMerchantRequest message, length delimited. Does not implicitly {@link pay.AuthMerchantRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pay.AuthMerchantRequest
         * @static
         * @param {pay.IAuthMerchantRequest} message AuthMerchantRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthMerchantRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AuthMerchantRequest message from the specified reader or buffer.
         * @function decode
         * @memberof pay.AuthMerchantRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pay.AuthMerchantRequest} AuthMerchantRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthMerchantRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pay.AuthMerchantRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.auth = $root.auth.Authorization.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.pay_id = reader.uint32();
                        break;
                    }
                case 11: {
                        message.user_id = reader.uint32();
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
         * Decodes an AuthMerchantRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pay.AuthMerchantRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pay.AuthMerchantRequest} AuthMerchantRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthMerchantRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AuthMerchantRequest message.
         * @function verify
         * @memberof pay.AuthMerchantRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AuthMerchantRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.auth != null && message.hasOwnProperty("auth")) {
                var error = $root.auth.Authorization.verify(message.auth);
                if (error)
                    return "auth." + error;
            }
            if (message.pay_id != null && message.hasOwnProperty("pay_id"))
                if (!$util.isInteger(message.pay_id))
                    return "pay_id: integer expected";
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                if (!$util.isInteger(message.user_id))
                    return "user_id: integer expected";
            return null;
        };

        /**
         * Creates an AuthMerchantRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pay.AuthMerchantRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pay.AuthMerchantRequest} AuthMerchantRequest
         */
        AuthMerchantRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.pay.AuthMerchantRequest)
                return object;
            var message = new $root.pay.AuthMerchantRequest();
            if (object.auth != null) {
                if (typeof object.auth !== "object")
                    throw TypeError(".pay.AuthMerchantRequest.auth: object expected");
                message.auth = $root.auth.Authorization.fromObject(object.auth);
            }
            if (object.pay_id != null)
                message.pay_id = object.pay_id >>> 0;
            if (object.user_id != null)
                message.user_id = object.user_id >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an AuthMerchantRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pay.AuthMerchantRequest
         * @static
         * @param {pay.AuthMerchantRequest} message AuthMerchantRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AuthMerchantRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.auth = null;
                object.pay_id = 0;
                object.user_id = 0;
            }
            if (message.auth != null && message.hasOwnProperty("auth"))
                object.auth = $root.auth.Authorization.toObject(message.auth, options);
            if (message.pay_id != null && message.hasOwnProperty("pay_id"))
                object.pay_id = message.pay_id;
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                object.user_id = message.user_id;
            return object;
        };

        /**
         * Converts this AuthMerchantRequest to JSON.
         * @function toJSON
         * @memberof pay.AuthMerchantRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AuthMerchantRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AuthMerchantRequest
         * @function getTypeUrl
         * @memberof pay.AuthMerchantRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AuthMerchantRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pay.AuthMerchantRequest";
        };

        return AuthMerchantRequest;
    })();

    pay.PayService = (function() {

        /**
         * Constructs a new PayService service.
         * @memberof pay
         * @classdesc Represents a PayService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function PayService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (PayService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = PayService;

        /**
         * Creates new PayService service using the specified rpc implementation.
         * @function create
         * @memberof pay.PayService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {PayService} RPC service. Useful where requests and/or responses are streamed.
         */
        PayService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link pay.PayService#setMerchant}.
         * @memberof pay.PayService
         * @typedef SetMerchantCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {common.Empty} [response] Empty
         */

        /**
         * Calls SetMerchant.
         * @function setMerchant
         * @memberof pay.PayService
         * @instance
         * @param {pay.ISetMerchantRequest} request SetMerchantRequest message or plain object
         * @param {pay.PayService.SetMerchantCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PayService.prototype.setMerchant = function setMerchant(request, callback) {
            return this.rpcCall(setMerchant, $root.pay.SetMerchantRequest, $root.common.Empty, request, callback);
        }, "name", { value: "SetMerchant" });

        /**
         * Calls SetMerchant.
         * @function setMerchant
         * @memberof pay.PayService
         * @instance
         * @param {pay.ISetMerchantRequest} request SetMerchantRequest message or plain object
         * @returns {Promise<common.Empty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pay.PayService#authMerchant}.
         * @memberof pay.PayService
         * @typedef AuthMerchantCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {common.Empty} [response] Empty
         */

        /**
         * Calls AuthMerchant.
         * @function authMerchant
         * @memberof pay.PayService
         * @instance
         * @param {pay.IAuthMerchantRequest} request AuthMerchantRequest message or plain object
         * @param {pay.PayService.AuthMerchantCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PayService.prototype.authMerchant = function authMerchant(request, callback) {
            return this.rpcCall(authMerchant, $root.pay.AuthMerchantRequest, $root.common.Empty, request, callback);
        }, "name", { value: "AuthMerchant" });

        /**
         * Calls AuthMerchant.
         * @function authMerchant
         * @memberof pay.PayService
         * @instance
         * @param {pay.IAuthMerchantRequest} request AuthMerchantRequest message or plain object
         * @returns {Promise<common.Empty>} Promise
         * @variation 2
         */

        return PayService;
    })();

    return pay;
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
     * @property {number} SUPER_ADMIN=1 SUPER_ADMIN value
     * @property {number} BLACK=9 BLACK value
     * @property {number} SAAS_ADMIN=11 SAAS_ADMIN value
     * @property {number} SAAS_AUTHORIZER=12 SAAS_AUTHORIZER value
     * @property {number} APP_ADMIN=21 APP_ADMIN value
     * @property {number} APP_AUTHORIZER=22 APP_AUTHORIZER value
     */
    role.Role = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "USER"] = 0;
        values[valuesById[1] = "SUPER_ADMIN"] = 1;
        values[valuesById[9] = "BLACK"] = 9;
        values[valuesById[11] = "SAAS_ADMIN"] = 11;
        values[valuesById[12] = "SAAS_AUTHORIZER"] = 12;
        values[valuesById[21] = "APP_ADMIN"] = 21;
        values[valuesById[22] = "APP_AUTHORIZER"] = 22;
        return values;
    })();

    role.GetRoleRequest = (function() {

        /**
         * Properties of a GetRoleRequest.
         * @memberof role
         * @interface IGetRoleRequest
         * @property {auth.IAuthorization|null} [auth] GetRoleRequest auth
         * @property {app.IAppIndex|null} [app] GetRoleRequest app
         * @property {number|null} [user_id] GetRoleRequest user_id
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
         * GetRoleRequest app.
         * @member {app.IAppIndex|null|undefined} app
         * @memberof role.GetRoleRequest
         * @instance
         */
        GetRoleRequest.prototype.app = null;

        /**
         * GetRoleRequest user_id.
         * @member {number} user_id
         * @memberof role.GetRoleRequest
         * @instance
         */
        GetRoleRequest.prototype.user_id = 0;

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
            if (message.app != null && Object.hasOwnProperty.call(message, "app"))
                $root.app.AppIndex.encode(message.app, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.user_id != null && Object.hasOwnProperty.call(message, "user_id"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.user_id);
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
        GetRoleRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.role.GetRoleRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.auth = $root.auth.Authorization.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.app = $root.app.AppIndex.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.user_id = reader.uint32();
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
            if (message.app != null && message.hasOwnProperty("app")) {
                var error = $root.app.AppIndex.verify(message.app);
                if (error)
                    return "app." + error;
            }
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                if (!$util.isInteger(message.user_id))
                    return "user_id: integer expected";
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
            if (object.app != null) {
                if (typeof object.app !== "object")
                    throw TypeError(".role.GetRoleRequest.app: object expected");
                message.app = $root.app.AppIndex.fromObject(object.app);
            }
            if (object.user_id != null)
                message.user_id = object.user_id >>> 0;
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
                object.app = null;
                object.user_id = 0;
            }
            if (message.auth != null && message.hasOwnProperty("auth"))
                object.auth = $root.auth.Authorization.toObject(message.auth, options);
            if (message.app != null && message.hasOwnProperty("app"))
                object.app = $root.app.AppIndex.toObject(message.app, options);
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                object.user_id = message.user_id;
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
        GetRoleResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.role.GetRoleResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
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
                    case 1:
                    case 9:
                    case 11:
                    case 12:
                    case 21:
                    case 22:
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
                    case "SUPER_ADMIN":
                    case 1:
                        message.roles[i] = 1;
                        break;
                    case "BLACK":
                    case 9:
                        message.roles[i] = 9;
                        break;
                    case "SAAS_ADMIN":
                    case 11:
                        message.roles[i] = 11;
                        break;
                    case "SAAS_AUTHORIZER":
                    case 12:
                        message.roles[i] = 12;
                        break;
                    case "APP_ADMIN":
                    case 21:
                        message.roles[i] = 21;
                        break;
                    case "APP_AUTHORIZER":
                    case 22:
                        message.roles[i] = 22;
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
         * @property {app.IAppIndex|null} [app] AddRoleRequest app
         * @property {number|null} [user_id] AddRoleRequest user_id
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
         * AddRoleRequest app.
         * @member {app.IAppIndex|null|undefined} app
         * @memberof role.AddRoleRequest
         * @instance
         */
        AddRoleRequest.prototype.app = null;

        /**
         * AddRoleRequest user_id.
         * @member {number} user_id
         * @memberof role.AddRoleRequest
         * @instance
         */
        AddRoleRequest.prototype.user_id = 0;

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
            if (message.app != null && Object.hasOwnProperty.call(message, "app"))
                $root.app.AppIndex.encode(message.app, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.user_id != null && Object.hasOwnProperty.call(message, "user_id"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.user_id);
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
        AddRoleRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.role.AddRoleRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.auth = $root.auth.Authorization.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.app = $root.app.AppIndex.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.user_id = reader.uint32();
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
            if (message.app != null && message.hasOwnProperty("app")) {
                var error = $root.app.AppIndex.verify(message.app);
                if (error)
                    return "app." + error;
            }
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                if (!$util.isInteger(message.user_id))
                    return "user_id: integer expected";
            if (message.role != null && message.hasOwnProperty("role"))
                switch (message.role) {
                default:
                    return "role: enum value expected";
                case 0:
                case 1:
                case 9:
                case 11:
                case 12:
                case 21:
                case 22:
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
            if (object.app != null) {
                if (typeof object.app !== "object")
                    throw TypeError(".role.AddRoleRequest.app: object expected");
                message.app = $root.app.AppIndex.fromObject(object.app);
            }
            if (object.user_id != null)
                message.user_id = object.user_id >>> 0;
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
            case "SUPER_ADMIN":
            case 1:
                message.role = 1;
                break;
            case "BLACK":
            case 9:
                message.role = 9;
                break;
            case "SAAS_ADMIN":
            case 11:
                message.role = 11;
                break;
            case "SAAS_AUTHORIZER":
            case 12:
                message.role = 12;
                break;
            case "APP_ADMIN":
            case 21:
                message.role = 21;
                break;
            case "APP_AUTHORIZER":
            case 22:
                message.role = 22;
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
                object.app = null;
                object.user_id = 0;
                object.role = options.enums === String ? "USER" : 0;
            }
            if (message.auth != null && message.hasOwnProperty("auth"))
                object.auth = $root.auth.Authorization.toObject(message.auth, options);
            if (message.app != null && message.hasOwnProperty("app"))
                object.app = $root.app.AppIndex.toObject(message.app, options);
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                object.user_id = message.user_id;
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
         * @property {app.IAppIndex|null} [app] DelRoleRequest app
         * @property {number|null} [user_id] DelRoleRequest user_id
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
         * DelRoleRequest app.
         * @member {app.IAppIndex|null|undefined} app
         * @memberof role.DelRoleRequest
         * @instance
         */
        DelRoleRequest.prototype.app = null;

        /**
         * DelRoleRequest user_id.
         * @member {number} user_id
         * @memberof role.DelRoleRequest
         * @instance
         */
        DelRoleRequest.prototype.user_id = 0;

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
            if (message.app != null && Object.hasOwnProperty.call(message, "app"))
                $root.app.AppIndex.encode(message.app, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.user_id != null && Object.hasOwnProperty.call(message, "user_id"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.user_id);
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
        DelRoleRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.role.DelRoleRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.auth = $root.auth.Authorization.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.app = $root.app.AppIndex.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.user_id = reader.uint32();
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
            if (message.app != null && message.hasOwnProperty("app")) {
                var error = $root.app.AppIndex.verify(message.app);
                if (error)
                    return "app." + error;
            }
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                if (!$util.isInteger(message.user_id))
                    return "user_id: integer expected";
            if (message.role != null && message.hasOwnProperty("role"))
                switch (message.role) {
                default:
                    return "role: enum value expected";
                case 0:
                case 1:
                case 9:
                case 11:
                case 12:
                case 21:
                case 22:
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
            if (object.app != null) {
                if (typeof object.app !== "object")
                    throw TypeError(".role.DelRoleRequest.app: object expected");
                message.app = $root.app.AppIndex.fromObject(object.app);
            }
            if (object.user_id != null)
                message.user_id = object.user_id >>> 0;
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
            case "SUPER_ADMIN":
            case 1:
                message.role = 1;
                break;
            case "BLACK":
            case 9:
                message.role = 9;
                break;
            case "SAAS_ADMIN":
            case 11:
                message.role = 11;
                break;
            case "SAAS_AUTHORIZER":
            case 12:
                message.role = 12;
                break;
            case "APP_ADMIN":
            case 21:
                message.role = 21;
                break;
            case "APP_AUTHORIZER":
            case 22:
                message.role = 22;
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
                object.app = null;
                object.user_id = 0;
                object.role = options.enums === String ? "USER" : 0;
            }
            if (message.auth != null && message.hasOwnProperty("auth"))
                object.auth = $root.auth.Authorization.toObject(message.auth, options);
            if (message.app != null && message.hasOwnProperty("app"))
                object.app = $root.app.AppIndex.toObject(message.app, options);
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                object.user_id = message.user_id;
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

$root.saas = (function() {

    /**
     * Namespace saas.
     * @exports saas
     * @namespace
     */
    var saas = {};

    saas.CreateSaasRequest = (function() {

        /**
         * Properties of a CreateSaasRequest.
         * @memberof saas
         * @interface ICreateSaasRequest
         * @property {auth.IAuthorization|null} [auth] CreateSaasRequest auth
         * @property {string|null} [name] CreateSaasRequest name
         */

        /**
         * Constructs a new CreateSaasRequest.
         * @memberof saas
         * @classdesc Represents a CreateSaasRequest.
         * @implements ICreateSaasRequest
         * @constructor
         * @param {saas.ICreateSaasRequest=} [properties] Properties to set
         */
        function CreateSaasRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateSaasRequest auth.
         * @member {auth.IAuthorization|null|undefined} auth
         * @memberof saas.CreateSaasRequest
         * @instance
         */
        CreateSaasRequest.prototype.auth = null;

        /**
         * CreateSaasRequest name.
         * @member {string} name
         * @memberof saas.CreateSaasRequest
         * @instance
         */
        CreateSaasRequest.prototype.name = "";

        /**
         * Creates a new CreateSaasRequest instance using the specified properties.
         * @function create
         * @memberof saas.CreateSaasRequest
         * @static
         * @param {saas.ICreateSaasRequest=} [properties] Properties to set
         * @returns {saas.CreateSaasRequest} CreateSaasRequest instance
         */
        CreateSaasRequest.create = function create(properties) {
            return new CreateSaasRequest(properties);
        };

        /**
         * Encodes the specified CreateSaasRequest message. Does not implicitly {@link saas.CreateSaasRequest.verify|verify} messages.
         * @function encode
         * @memberof saas.CreateSaasRequest
         * @static
         * @param {saas.ICreateSaasRequest} message CreateSaasRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateSaasRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.auth != null && Object.hasOwnProperty.call(message, "auth"))
                $root.auth.Authorization.encode(message.auth, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified CreateSaasRequest message, length delimited. Does not implicitly {@link saas.CreateSaasRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof saas.CreateSaasRequest
         * @static
         * @param {saas.ICreateSaasRequest} message CreateSaasRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateSaasRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateSaasRequest message from the specified reader or buffer.
         * @function decode
         * @memberof saas.CreateSaasRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {saas.CreateSaasRequest} CreateSaasRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateSaasRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.saas.CreateSaasRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.auth = $root.auth.Authorization.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.name = reader.string();
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
         * Decodes a CreateSaasRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof saas.CreateSaasRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {saas.CreateSaasRequest} CreateSaasRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateSaasRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateSaasRequest message.
         * @function verify
         * @memberof saas.CreateSaasRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateSaasRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.auth != null && message.hasOwnProperty("auth")) {
                var error = $root.auth.Authorization.verify(message.auth);
                if (error)
                    return "auth." + error;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a CreateSaasRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof saas.CreateSaasRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {saas.CreateSaasRequest} CreateSaasRequest
         */
        CreateSaasRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.saas.CreateSaasRequest)
                return object;
            var message = new $root.saas.CreateSaasRequest();
            if (object.auth != null) {
                if (typeof object.auth !== "object")
                    throw TypeError(".saas.CreateSaasRequest.auth: object expected");
                message.auth = $root.auth.Authorization.fromObject(object.auth);
            }
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a CreateSaasRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof saas.CreateSaasRequest
         * @static
         * @param {saas.CreateSaasRequest} message CreateSaasRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateSaasRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.auth = null;
                object.name = "";
            }
            if (message.auth != null && message.hasOwnProperty("auth"))
                object.auth = $root.auth.Authorization.toObject(message.auth, options);
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this CreateSaasRequest to JSON.
         * @function toJSON
         * @memberof saas.CreateSaasRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateSaasRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateSaasRequest
         * @function getTypeUrl
         * @memberof saas.CreateSaasRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateSaasRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/saas.CreateSaasRequest";
        };

        return CreateSaasRequest;
    })();

    saas.CreateSaasResponse = (function() {

        /**
         * Properties of a CreateSaasResponse.
         * @memberof saas
         * @interface ICreateSaasResponse
         * @property {number|null} [saas_id] CreateSaasResponse saas_id
         */

        /**
         * Constructs a new CreateSaasResponse.
         * @memberof saas
         * @classdesc Represents a CreateSaasResponse.
         * @implements ICreateSaasResponse
         * @constructor
         * @param {saas.ICreateSaasResponse=} [properties] Properties to set
         */
        function CreateSaasResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateSaasResponse saas_id.
         * @member {number} saas_id
         * @memberof saas.CreateSaasResponse
         * @instance
         */
        CreateSaasResponse.prototype.saas_id = 0;

        /**
         * Creates a new CreateSaasResponse instance using the specified properties.
         * @function create
         * @memberof saas.CreateSaasResponse
         * @static
         * @param {saas.ICreateSaasResponse=} [properties] Properties to set
         * @returns {saas.CreateSaasResponse} CreateSaasResponse instance
         */
        CreateSaasResponse.create = function create(properties) {
            return new CreateSaasResponse(properties);
        };

        /**
         * Encodes the specified CreateSaasResponse message. Does not implicitly {@link saas.CreateSaasResponse.verify|verify} messages.
         * @function encode
         * @memberof saas.CreateSaasResponse
         * @static
         * @param {saas.ICreateSaasResponse} message CreateSaasResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateSaasResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.saas_id != null && Object.hasOwnProperty.call(message, "saas_id"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.saas_id);
            return writer;
        };

        /**
         * Encodes the specified CreateSaasResponse message, length delimited. Does not implicitly {@link saas.CreateSaasResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof saas.CreateSaasResponse
         * @static
         * @param {saas.ICreateSaasResponse} message CreateSaasResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateSaasResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateSaasResponse message from the specified reader or buffer.
         * @function decode
         * @memberof saas.CreateSaasResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {saas.CreateSaasResponse} CreateSaasResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateSaasResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.saas.CreateSaasResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 11: {
                        message.saas_id = reader.uint32();
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
         * Decodes a CreateSaasResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof saas.CreateSaasResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {saas.CreateSaasResponse} CreateSaasResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateSaasResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateSaasResponse message.
         * @function verify
         * @memberof saas.CreateSaasResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateSaasResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.saas_id != null && message.hasOwnProperty("saas_id"))
                if (!$util.isInteger(message.saas_id))
                    return "saas_id: integer expected";
            return null;
        };

        /**
         * Creates a CreateSaasResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof saas.CreateSaasResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {saas.CreateSaasResponse} CreateSaasResponse
         */
        CreateSaasResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.saas.CreateSaasResponse)
                return object;
            var message = new $root.saas.CreateSaasResponse();
            if (object.saas_id != null)
                message.saas_id = object.saas_id >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a CreateSaasResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof saas.CreateSaasResponse
         * @static
         * @param {saas.CreateSaasResponse} message CreateSaasResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateSaasResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.saas_id = 0;
            if (message.saas_id != null && message.hasOwnProperty("saas_id"))
                object.saas_id = message.saas_id;
            return object;
        };

        /**
         * Converts this CreateSaasResponse to JSON.
         * @function toJSON
         * @memberof saas.CreateSaasResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateSaasResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateSaasResponse
         * @function getTypeUrl
         * @memberof saas.CreateSaasResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateSaasResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/saas.CreateSaasResponse";
        };

        return CreateSaasResponse;
    })();

    saas.SaasService = (function() {

        /**
         * Constructs a new SaasService service.
         * @memberof saas
         * @classdesc Represents a SaasService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function SaasService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (SaasService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = SaasService;

        /**
         * Creates new SaasService service using the specified rpc implementation.
         * @function create
         * @memberof saas.SaasService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {SaasService} RPC service. Useful where requests and/or responses are streamed.
         */
        SaasService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link saas.SaasService#createSaas}.
         * @memberof saas.SaasService
         * @typedef CreateSaasCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {saas.CreateSaasResponse} [response] CreateSaasResponse
         */

        /**
         * Calls CreateSaas.
         * @function createSaas
         * @memberof saas.SaasService
         * @instance
         * @param {saas.ICreateSaasRequest} request CreateSaasRequest message or plain object
         * @param {saas.SaasService.CreateSaasCallback} callback Node-style callback called with the error, if any, and CreateSaasResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(SaasService.prototype.createSaas = function createSaas(request, callback) {
            return this.rpcCall(createSaas, $root.saas.CreateSaasRequest, $root.saas.CreateSaasResponse, request, callback);
        }, "name", { value: "CreateSaas" });

        /**
         * Calls CreateSaas.
         * @function createSaas
         * @memberof saas.SaasService
         * @instance
         * @param {saas.ICreateSaasRequest} request CreateSaasRequest message or plain object
         * @returns {Promise<saas.CreateSaasResponse>} Promise
         * @variation 2
         */

        return SaasService;
    })();

    return saas;
})();

$root.three_wechat = (function() {

    /**
     * Namespace three_wechat.
     * @exports three_wechat
     * @namespace
     */
    var three_wechat = {};

    three_wechat.GetWechatMpRequest = (function() {

        /**
         * Properties of a GetWechatMpRequest.
         * @memberof three_wechat
         * @interface IGetWechatMpRequest
         * @property {string|null} [url] GetWechatMpRequest url
         */

        /**
         * Constructs a new GetWechatMpRequest.
         * @memberof three_wechat
         * @classdesc Represents a GetWechatMpRequest.
         * @implements IGetWechatMpRequest
         * @constructor
         * @param {three_wechat.IGetWechatMpRequest=} [properties] Properties to set
         */
        function GetWechatMpRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetWechatMpRequest url.
         * @member {string} url
         * @memberof three_wechat.GetWechatMpRequest
         * @instance
         */
        GetWechatMpRequest.prototype.url = "";

        /**
         * Creates a new GetWechatMpRequest instance using the specified properties.
         * @function create
         * @memberof three_wechat.GetWechatMpRequest
         * @static
         * @param {three_wechat.IGetWechatMpRequest=} [properties] Properties to set
         * @returns {three_wechat.GetWechatMpRequest} GetWechatMpRequest instance
         */
        GetWechatMpRequest.create = function create(properties) {
            return new GetWechatMpRequest(properties);
        };

        /**
         * Encodes the specified GetWechatMpRequest message. Does not implicitly {@link three_wechat.GetWechatMpRequest.verify|verify} messages.
         * @function encode
         * @memberof three_wechat.GetWechatMpRequest
         * @static
         * @param {three_wechat.IGetWechatMpRequest} message GetWechatMpRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetWechatMpRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.url);
            return writer;
        };

        /**
         * Encodes the specified GetWechatMpRequest message, length delimited. Does not implicitly {@link three_wechat.GetWechatMpRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof three_wechat.GetWechatMpRequest
         * @static
         * @param {three_wechat.IGetWechatMpRequest} message GetWechatMpRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetWechatMpRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetWechatMpRequest message from the specified reader or buffer.
         * @function decode
         * @memberof three_wechat.GetWechatMpRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {three_wechat.GetWechatMpRequest} GetWechatMpRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetWechatMpRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.three_wechat.GetWechatMpRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 10: {
                        message.url = reader.string();
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
         * Decodes a GetWechatMpRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof three_wechat.GetWechatMpRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {three_wechat.GetWechatMpRequest} GetWechatMpRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetWechatMpRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetWechatMpRequest message.
         * @function verify
         * @memberof three_wechat.GetWechatMpRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetWechatMpRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            return null;
        };

        /**
         * Creates a GetWechatMpRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof three_wechat.GetWechatMpRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {three_wechat.GetWechatMpRequest} GetWechatMpRequest
         */
        GetWechatMpRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.three_wechat.GetWechatMpRequest)
                return object;
            var message = new $root.three_wechat.GetWechatMpRequest();
            if (object.url != null)
                message.url = String(object.url);
            return message;
        };

        /**
         * Creates a plain object from a GetWechatMpRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof three_wechat.GetWechatMpRequest
         * @static
         * @param {three_wechat.GetWechatMpRequest} message GetWechatMpRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetWechatMpRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.url = "";
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            return object;
        };

        /**
         * Converts this GetWechatMpRequest to JSON.
         * @function toJSON
         * @memberof three_wechat.GetWechatMpRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetWechatMpRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetWechatMpRequest
         * @function getTypeUrl
         * @memberof three_wechat.GetWechatMpRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetWechatMpRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/three_wechat.GetWechatMpRequest";
        };

        return GetWechatMpRequest;
    })();

    three_wechat.GetWechatMpResponse = (function() {

        /**
         * Properties of a GetWechatMpResponse.
         * @memberof three_wechat
         * @interface IGetWechatMpResponse
         * @property {string|null} [appId] GetWechatMpResponse appId
         * @property {string|null} [timestamp] GetWechatMpResponse timestamp
         * @property {string|null} [nonceStr] GetWechatMpResponse nonceStr
         * @property {string|null} [signature] GetWechatMpResponse signature
         */

        /**
         * Constructs a new GetWechatMpResponse.
         * @memberof three_wechat
         * @classdesc Represents a GetWechatMpResponse.
         * @implements IGetWechatMpResponse
         * @constructor
         * @param {three_wechat.IGetWechatMpResponse=} [properties] Properties to set
         */
        function GetWechatMpResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetWechatMpResponse appId.
         * @member {string} appId
         * @memberof three_wechat.GetWechatMpResponse
         * @instance
         */
        GetWechatMpResponse.prototype.appId = "";

        /**
         * GetWechatMpResponse timestamp.
         * @member {string} timestamp
         * @memberof three_wechat.GetWechatMpResponse
         * @instance
         */
        GetWechatMpResponse.prototype.timestamp = "";

        /**
         * GetWechatMpResponse nonceStr.
         * @member {string} nonceStr
         * @memberof three_wechat.GetWechatMpResponse
         * @instance
         */
        GetWechatMpResponse.prototype.nonceStr = "";

        /**
         * GetWechatMpResponse signature.
         * @member {string} signature
         * @memberof three_wechat.GetWechatMpResponse
         * @instance
         */
        GetWechatMpResponse.prototype.signature = "";

        /**
         * Creates a new GetWechatMpResponse instance using the specified properties.
         * @function create
         * @memberof three_wechat.GetWechatMpResponse
         * @static
         * @param {three_wechat.IGetWechatMpResponse=} [properties] Properties to set
         * @returns {three_wechat.GetWechatMpResponse} GetWechatMpResponse instance
         */
        GetWechatMpResponse.create = function create(properties) {
            return new GetWechatMpResponse(properties);
        };

        /**
         * Encodes the specified GetWechatMpResponse message. Does not implicitly {@link three_wechat.GetWechatMpResponse.verify|verify} messages.
         * @function encode
         * @memberof three_wechat.GetWechatMpResponse
         * @static
         * @param {three_wechat.IGetWechatMpResponse} message GetWechatMpResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetWechatMpResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appId != null && Object.hasOwnProperty.call(message, "appId"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.appId);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.timestamp);
            if (message.nonceStr != null && Object.hasOwnProperty.call(message, "nonceStr"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.nonceStr);
            if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.signature);
            return writer;
        };

        /**
         * Encodes the specified GetWechatMpResponse message, length delimited. Does not implicitly {@link three_wechat.GetWechatMpResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof three_wechat.GetWechatMpResponse
         * @static
         * @param {three_wechat.IGetWechatMpResponse} message GetWechatMpResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetWechatMpResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetWechatMpResponse message from the specified reader or buffer.
         * @function decode
         * @memberof three_wechat.GetWechatMpResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {three_wechat.GetWechatMpResponse} GetWechatMpResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetWechatMpResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.three_wechat.GetWechatMpResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 11: {
                        message.appId = reader.string();
                        break;
                    }
                case 12: {
                        message.timestamp = reader.string();
                        break;
                    }
                case 13: {
                        message.nonceStr = reader.string();
                        break;
                    }
                case 14: {
                        message.signature = reader.string();
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
         * Decodes a GetWechatMpResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof three_wechat.GetWechatMpResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {three_wechat.GetWechatMpResponse} GetWechatMpResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetWechatMpResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetWechatMpResponse message.
         * @function verify
         * @memberof three_wechat.GetWechatMpResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetWechatMpResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appId != null && message.hasOwnProperty("appId"))
                if (!$util.isString(message.appId))
                    return "appId: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isString(message.timestamp))
                    return "timestamp: string expected";
            if (message.nonceStr != null && message.hasOwnProperty("nonceStr"))
                if (!$util.isString(message.nonceStr))
                    return "nonceStr: string expected";
            if (message.signature != null && message.hasOwnProperty("signature"))
                if (!$util.isString(message.signature))
                    return "signature: string expected";
            return null;
        };

        /**
         * Creates a GetWechatMpResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof three_wechat.GetWechatMpResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {three_wechat.GetWechatMpResponse} GetWechatMpResponse
         */
        GetWechatMpResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.three_wechat.GetWechatMpResponse)
                return object;
            var message = new $root.three_wechat.GetWechatMpResponse();
            if (object.appId != null)
                message.appId = String(object.appId);
            if (object.timestamp != null)
                message.timestamp = String(object.timestamp);
            if (object.nonceStr != null)
                message.nonceStr = String(object.nonceStr);
            if (object.signature != null)
                message.signature = String(object.signature);
            return message;
        };

        /**
         * Creates a plain object from a GetWechatMpResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof three_wechat.GetWechatMpResponse
         * @static
         * @param {three_wechat.GetWechatMpResponse} message GetWechatMpResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetWechatMpResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appId = "";
                object.timestamp = "";
                object.nonceStr = "";
                object.signature = "";
            }
            if (message.appId != null && message.hasOwnProperty("appId"))
                object.appId = message.appId;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = message.timestamp;
            if (message.nonceStr != null && message.hasOwnProperty("nonceStr"))
                object.nonceStr = message.nonceStr;
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = message.signature;
            return object;
        };

        /**
         * Converts this GetWechatMpResponse to JSON.
         * @function toJSON
         * @memberof three_wechat.GetWechatMpResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetWechatMpResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetWechatMpResponse
         * @function getTypeUrl
         * @memberof three_wechat.GetWechatMpResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetWechatMpResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/three_wechat.GetWechatMpResponse";
        };

        return GetWechatMpResponse;
    })();

    three_wechat.ThreeWechatService = (function() {

        /**
         * Constructs a new ThreeWechatService service.
         * @memberof three_wechat
         * @classdesc Represents a ThreeWechatService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function ThreeWechatService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (ThreeWechatService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = ThreeWechatService;

        /**
         * Creates new ThreeWechatService service using the specified rpc implementation.
         * @function create
         * @memberof three_wechat.ThreeWechatService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {ThreeWechatService} RPC service. Useful where requests and/or responses are streamed.
         */
        ThreeWechatService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link three_wechat.ThreeWechatService#getWechatMp}.
         * @memberof three_wechat.ThreeWechatService
         * @typedef GetWechatMpCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {three_wechat.GetWechatMpResponse} [response] GetWechatMpResponse
         */

        /**
         * Calls GetWechatMp.
         * @function getWechatMp
         * @memberof three_wechat.ThreeWechatService
         * @instance
         * @param {three_wechat.IGetWechatMpRequest} request GetWechatMpRequest message or plain object
         * @param {three_wechat.ThreeWechatService.GetWechatMpCallback} callback Node-style callback called with the error, if any, and GetWechatMpResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ThreeWechatService.prototype.getWechatMp = function getWechatMp(request, callback) {
            return this.rpcCall(getWechatMp, $root.three_wechat.GetWechatMpRequest, $root.three_wechat.GetWechatMpResponse, request, callback);
        }, "name", { value: "GetWechatMp" });

        /**
         * Calls GetWechatMp.
         * @function getWechatMp
         * @memberof three_wechat.ThreeWechatService
         * @instance
         * @param {three_wechat.IGetWechatMpRequest} request GetWechatMpRequest message or plain object
         * @returns {Promise<three_wechat.GetWechatMpResponse>} Promise
         * @variation 2
         */

        return ThreeWechatService;
    })();

    return three_wechat;
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
         * @property {captcha.ICheckCaptcha|null} [captcha] LoginRequest captcha
         * @property {common.Platform|null} [platform] LoginRequest platform
         * @property {string|null} [username] LoginRequest username
         * @property {string|null} [passwd] LoginRequest passwd
         * @property {string|null} [device_id] LoginRequest device_id
         * @property {string|null} [device_name] LoginRequest device_name
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
         * LoginRequest captcha.
         * @member {captcha.ICheckCaptcha|null|undefined} captcha
         * @memberof user.LoginRequest
         * @instance
         */
        LoginRequest.prototype.captcha = null;

        /**
         * LoginRequest platform.
         * @member {common.Platform} platform
         * @memberof user.LoginRequest
         * @instance
         */
        LoginRequest.prototype.platform = 0;

        /**
         * LoginRequest username.
         * @member {string} username
         * @memberof user.LoginRequest
         * @instance
         */
        LoginRequest.prototype.username = "";

        /**
         * LoginRequest passwd.
         * @member {string} passwd
         * @memberof user.LoginRequest
         * @instance
         */
        LoginRequest.prototype.passwd = "";

        /**
         * LoginRequest device_id.
         * @member {string} device_id
         * @memberof user.LoginRequest
         * @instance
         */
        LoginRequest.prototype.device_id = "";

        /**
         * LoginRequest device_name.
         * @member {string} device_name
         * @memberof user.LoginRequest
         * @instance
         */
        LoginRequest.prototype.device_name = "";

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
            if (message.captcha != null && Object.hasOwnProperty.call(message, "captcha"))
                $root.captcha.CheckCaptcha.encode(message.captcha, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.platform != null && Object.hasOwnProperty.call(message, "platform"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.platform);
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.username);
            if (message.passwd != null && Object.hasOwnProperty.call(message, "passwd"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.passwd);
            if (message.device_id != null && Object.hasOwnProperty.call(message, "device_id"))
                writer.uint32(/* id 21, wireType 2 =*/170).string(message.device_id);
            if (message.device_name != null && Object.hasOwnProperty.call(message, "device_name"))
                writer.uint32(/* id 22, wireType 2 =*/178).string(message.device_name);
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
        LoginRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.LoginRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.timestamp = reader.uint64();
                        break;
                    }
                case 3: {
                        message.captcha = $root.captcha.CheckCaptcha.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.platform = reader.int32();
                        break;
                    }
                case 11: {
                        message.username = reader.string();
                        break;
                    }
                case 12: {
                        message.passwd = reader.string();
                        break;
                    }
                case 21: {
                        message.device_id = reader.string();
                        break;
                    }
                case 22: {
                        message.device_name = reader.string();
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
            if (message.captcha != null && message.hasOwnProperty("captcha")) {
                var error = $root.captcha.CheckCaptcha.verify(message.captcha);
                if (error)
                    return "captcha." + error;
            }
            if (message.platform != null && message.hasOwnProperty("platform"))
                switch (message.platform) {
                default:
                    return "platform: enum value expected";
                case 0:
                case 1:
                case 2:
                case 11:
                case 12:
                    break;
                }
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.passwd != null && message.hasOwnProperty("passwd"))
                if (!$util.isString(message.passwd))
                    return "passwd: string expected";
            if (message.device_id != null && message.hasOwnProperty("device_id"))
                if (!$util.isString(message.device_id))
                    return "device_id: string expected";
            if (message.device_name != null && message.hasOwnProperty("device_name"))
                if (!$util.isString(message.device_name))
                    return "device_name: string expected";
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
            if (object.captcha != null) {
                if (typeof object.captcha !== "object")
                    throw TypeError(".user.LoginRequest.captcha: object expected");
                message.captcha = $root.captcha.CheckCaptcha.fromObject(object.captcha);
            }
            switch (object.platform) {
            default:
                if (typeof object.platform === "number") {
                    message.platform = object.platform;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                message.platform = 0;
                break;
            case "WEB":
            case 1:
                message.platform = 1;
                break;
            case "APP":
            case 2:
                message.platform = 2;
                break;
            case "WECHAT_MP":
            case 11:
                message.platform = 11;
                break;
            case "WECHAT_APP":
            case 12:
                message.platform = 12;
                break;
            }
            if (object.username != null)
                message.username = String(object.username);
            if (object.passwd != null)
                message.passwd = String(object.passwd);
            if (object.device_id != null)
                message.device_id = String(object.device_id);
            if (object.device_name != null)
                message.device_name = String(object.device_name);
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
                object.captcha = null;
                object.platform = options.enums === String ? "UNKNOWN" : 0;
                object.username = "";
                object.passwd = "";
                object.device_id = "";
                object.device_name = "";
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
            if (message.captcha != null && message.hasOwnProperty("captcha"))
                object.captcha = $root.captcha.CheckCaptcha.toObject(message.captcha, options);
            if (message.platform != null && message.hasOwnProperty("platform"))
                object.platform = options.enums === String ? $root.common.Platform[message.platform] === undefined ? message.platform : $root.common.Platform[message.platform] : message.platform;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.passwd != null && message.hasOwnProperty("passwd"))
                object.passwd = message.passwd;
            if (message.device_id != null && message.hasOwnProperty("device_id"))
                object.device_id = message.device_id;
            if (message.device_name != null && message.hasOwnProperty("device_name"))
                object.device_name = message.device_name;
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

    user.ThreeLoginRequest = (function() {

        /**
         * Properties of a ThreeLoginRequest.
         * @memberof user
         * @interface IThreeLoginRequest
         * @property {common.Platform|null} [platform] ThreeLoginRequest platform
         * @property {string|null} [code] ThreeLoginRequest code
         * @property {string|null} [device_id] ThreeLoginRequest device_id
         * @property {string|null} [device_name] ThreeLoginRequest device_name
         * @property {number|Long|null} [expire] ThreeLoginRequest expire
         */

        /**
         * Constructs a new ThreeLoginRequest.
         * @memberof user
         * @classdesc Represents a ThreeLoginRequest.
         * @implements IThreeLoginRequest
         * @constructor
         * @param {user.IThreeLoginRequest=} [properties] Properties to set
         */
        function ThreeLoginRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ThreeLoginRequest platform.
         * @member {common.Platform} platform
         * @memberof user.ThreeLoginRequest
         * @instance
         */
        ThreeLoginRequest.prototype.platform = 0;

        /**
         * ThreeLoginRequest code.
         * @member {string} code
         * @memberof user.ThreeLoginRequest
         * @instance
         */
        ThreeLoginRequest.prototype.code = "";

        /**
         * ThreeLoginRequest device_id.
         * @member {string} device_id
         * @memberof user.ThreeLoginRequest
         * @instance
         */
        ThreeLoginRequest.prototype.device_id = "";

        /**
         * ThreeLoginRequest device_name.
         * @member {string} device_name
         * @memberof user.ThreeLoginRequest
         * @instance
         */
        ThreeLoginRequest.prototype.device_name = "";

        /**
         * ThreeLoginRequest expire.
         * @member {number|Long} expire
         * @memberof user.ThreeLoginRequest
         * @instance
         */
        ThreeLoginRequest.prototype.expire = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new ThreeLoginRequest instance using the specified properties.
         * @function create
         * @memberof user.ThreeLoginRequest
         * @static
         * @param {user.IThreeLoginRequest=} [properties] Properties to set
         * @returns {user.ThreeLoginRequest} ThreeLoginRequest instance
         */
        ThreeLoginRequest.create = function create(properties) {
            return new ThreeLoginRequest(properties);
        };

        /**
         * Encodes the specified ThreeLoginRequest message. Does not implicitly {@link user.ThreeLoginRequest.verify|verify} messages.
         * @function encode
         * @memberof user.ThreeLoginRequest
         * @static
         * @param {user.IThreeLoginRequest} message ThreeLoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ThreeLoginRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.platform != null && Object.hasOwnProperty.call(message, "platform"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.platform);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.code);
            if (message.device_id != null && Object.hasOwnProperty.call(message, "device_id"))
                writer.uint32(/* id 21, wireType 2 =*/170).string(message.device_id);
            if (message.device_name != null && Object.hasOwnProperty.call(message, "device_name"))
                writer.uint32(/* id 22, wireType 2 =*/178).string(message.device_name);
            if (message.expire != null && Object.hasOwnProperty.call(message, "expire"))
                writer.uint32(/* id 51, wireType 0 =*/408).uint64(message.expire);
            return writer;
        };

        /**
         * Encodes the specified ThreeLoginRequest message, length delimited. Does not implicitly {@link user.ThreeLoginRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.ThreeLoginRequest
         * @static
         * @param {user.IThreeLoginRequest} message ThreeLoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ThreeLoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ThreeLoginRequest message from the specified reader or buffer.
         * @function decode
         * @memberof user.ThreeLoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.ThreeLoginRequest} ThreeLoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ThreeLoginRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.ThreeLoginRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 10: {
                        message.platform = reader.int32();
                        break;
                    }
                case 11: {
                        message.code = reader.string();
                        break;
                    }
                case 21: {
                        message.device_id = reader.string();
                        break;
                    }
                case 22: {
                        message.device_name = reader.string();
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
         * Decodes a ThreeLoginRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.ThreeLoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.ThreeLoginRequest} ThreeLoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ThreeLoginRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ThreeLoginRequest message.
         * @function verify
         * @memberof user.ThreeLoginRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ThreeLoginRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.platform != null && message.hasOwnProperty("platform"))
                switch (message.platform) {
                default:
                    return "platform: enum value expected";
                case 0:
                case 1:
                case 2:
                case 11:
                case 12:
                    break;
                }
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.device_id != null && message.hasOwnProperty("device_id"))
                if (!$util.isString(message.device_id))
                    return "device_id: string expected";
            if (message.device_name != null && message.hasOwnProperty("device_name"))
                if (!$util.isString(message.device_name))
                    return "device_name: string expected";
            if (message.expire != null && message.hasOwnProperty("expire"))
                if (!$util.isInteger(message.expire) && !(message.expire && $util.isInteger(message.expire.low) && $util.isInteger(message.expire.high)))
                    return "expire: integer|Long expected";
            return null;
        };

        /**
         * Creates a ThreeLoginRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.ThreeLoginRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.ThreeLoginRequest} ThreeLoginRequest
         */
        ThreeLoginRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.user.ThreeLoginRequest)
                return object;
            var message = new $root.user.ThreeLoginRequest();
            switch (object.platform) {
            default:
                if (typeof object.platform === "number") {
                    message.platform = object.platform;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                message.platform = 0;
                break;
            case "WEB":
            case 1:
                message.platform = 1;
                break;
            case "APP":
            case 2:
                message.platform = 2;
                break;
            case "WECHAT_MP":
            case 11:
                message.platform = 11;
                break;
            case "WECHAT_APP":
            case 12:
                message.platform = 12;
                break;
            }
            if (object.code != null)
                message.code = String(object.code);
            if (object.device_id != null)
                message.device_id = String(object.device_id);
            if (object.device_name != null)
                message.device_name = String(object.device_name);
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
         * Creates a plain object from a ThreeLoginRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.ThreeLoginRequest
         * @static
         * @param {user.ThreeLoginRequest} message ThreeLoginRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ThreeLoginRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.platform = options.enums === String ? "UNKNOWN" : 0;
                object.code = "";
                object.device_id = "";
                object.device_name = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.expire = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.expire = options.longs === String ? "0" : 0;
            }
            if (message.platform != null && message.hasOwnProperty("platform"))
                object.platform = options.enums === String ? $root.common.Platform[message.platform] === undefined ? message.platform : $root.common.Platform[message.platform] : message.platform;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.device_id != null && message.hasOwnProperty("device_id"))
                object.device_id = message.device_id;
            if (message.device_name != null && message.hasOwnProperty("device_name"))
                object.device_name = message.device_name;
            if (message.expire != null && message.hasOwnProperty("expire"))
                if (typeof message.expire === "number")
                    object.expire = options.longs === String ? String(message.expire) : message.expire;
                else
                    object.expire = options.longs === String ? $util.Long.prototype.toString.call(message.expire) : options.longs === Number ? new $util.LongBits(message.expire.low >>> 0, message.expire.high >>> 0).toNumber(true) : message.expire;
            return object;
        };

        /**
         * Converts this ThreeLoginRequest to JSON.
         * @function toJSON
         * @memberof user.ThreeLoginRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ThreeLoginRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ThreeLoginRequest
         * @function getTypeUrl
         * @memberof user.ThreeLoginRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ThreeLoginRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/user.ThreeLoginRequest";
        };

        return ThreeLoginRequest;
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
        LoginResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.LoginResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
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

    /**
     * Sex enum.
     * @name user.Sex
     * @enum {number}
     * @property {number} UNKONWN=0 UNKONWN value
     * @property {number} MAN=1 MAN value
     * @property {number} WOMAN=2 WOMAN value
     */
    user.Sex = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKONWN"] = 0;
        values[valuesById[1] = "MAN"] = 1;
        values[valuesById[2] = "WOMAN"] = 2;
        return values;
    })();

    user.User = (function() {

        /**
         * Properties of a User.
         * @memberof user
         * @interface IUser
         * @property {number|null} [id] User id
         * @property {string|null} [username] User username
         * @property {string|null} [nickname] User nickname
         * @property {string|null} [avatar] User avatar
         * @property {user.Sex|null} [sex] User sex
         * @property {string|null} [bio] User bio
         */

        /**
         * Constructs a new User.
         * @memberof user
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {user.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User id.
         * @member {number} id
         * @memberof user.User
         * @instance
         */
        User.prototype.id = 0;

        /**
         * User username.
         * @member {string} username
         * @memberof user.User
         * @instance
         */
        User.prototype.username = "";

        /**
         * User nickname.
         * @member {string} nickname
         * @memberof user.User
         * @instance
         */
        User.prototype.nickname = "";

        /**
         * User avatar.
         * @member {string} avatar
         * @memberof user.User
         * @instance
         */
        User.prototype.avatar = "";

        /**
         * User sex.
         * @member {user.Sex} sex
         * @memberof user.User
         * @instance
         */
        User.prototype.sex = 0;

        /**
         * User bio.
         * @member {string} bio
         * @memberof user.User
         * @instance
         */
        User.prototype.bio = "";

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof user.User
         * @static
         * @param {user.IUser=} [properties] Properties to set
         * @returns {user.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link user.User.verify|verify} messages.
         * @function encode
         * @memberof user.User
         * @static
         * @param {user.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.id);
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.username);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 21, wireType 2 =*/170).string(message.nickname);
            if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                writer.uint32(/* id 22, wireType 2 =*/178).string(message.avatar);
            if (message.sex != null && Object.hasOwnProperty.call(message, "sex"))
                writer.uint32(/* id 23, wireType 0 =*/184).int32(message.sex);
            if (message.bio != null && Object.hasOwnProperty.call(message, "bio"))
                writer.uint32(/* id 24, wireType 2 =*/194).string(message.bio);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link user.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.User
         * @static
         * @param {user.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof user.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.User();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 11: {
                        message.id = reader.uint32();
                        break;
                    }
                case 12: {
                        message.username = reader.string();
                        break;
                    }
                case 21: {
                        message.nickname = reader.string();
                        break;
                    }
                case 22: {
                        message.avatar = reader.string();
                        break;
                    }
                case 23: {
                        message.sex = reader.int32();
                        break;
                    }
                case 24: {
                        message.bio = reader.string();
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
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof user.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                if (!$util.isString(message.avatar))
                    return "avatar: string expected";
            if (message.sex != null && message.hasOwnProperty("sex"))
                switch (message.sex) {
                default:
                    return "sex: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.bio != null && message.hasOwnProperty("bio"))
                if (!$util.isString(message.bio))
                    return "bio: string expected";
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.user.User)
                return object;
            var message = new $root.user.User();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.username != null)
                message.username = String(object.username);
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.avatar != null)
                message.avatar = String(object.avatar);
            switch (object.sex) {
            default:
                if (typeof object.sex === "number") {
                    message.sex = object.sex;
                    break;
                }
                break;
            case "UNKONWN":
            case 0:
                message.sex = 0;
                break;
            case "MAN":
            case 1:
                message.sex = 1;
                break;
            case "WOMAN":
            case 2:
                message.sex = 2;
                break;
            }
            if (object.bio != null)
                message.bio = String(object.bio);
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.User
         * @static
         * @param {user.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.username = "";
                object.nickname = "";
                object.avatar = "";
                object.sex = options.enums === String ? "UNKONWN" : 0;
                object.bio = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                object.avatar = message.avatar;
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = options.enums === String ? $root.user.Sex[message.sex] === undefined ? message.sex : $root.user.Sex[message.sex] : message.sex;
            if (message.bio != null && message.hasOwnProperty("bio"))
                object.bio = message.bio;
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof user.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for User
         * @function getTypeUrl
         * @memberof user.User
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        User.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/user.User";
        };

        return User;
    })();

    user.SetUserInfoRequest = (function() {

        /**
         * Properties of a SetUserInfoRequest.
         * @memberof user
         * @interface ISetUserInfoRequest
         * @property {auth.IAuthorization|null} [auth] SetUserInfoRequest auth
         * @property {string|null} [nickname] SetUserInfoRequest nickname
         * @property {string|null} [avatar] SetUserInfoRequest avatar
         * @property {user.Sex|null} [sex] SetUserInfoRequest sex
         * @property {string|null} [bio] SetUserInfoRequest bio
         */

        /**
         * Constructs a new SetUserInfoRequest.
         * @memberof user
         * @classdesc Represents a SetUserInfoRequest.
         * @implements ISetUserInfoRequest
         * @constructor
         * @param {user.ISetUserInfoRequest=} [properties] Properties to set
         */
        function SetUserInfoRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetUserInfoRequest auth.
         * @member {auth.IAuthorization|null|undefined} auth
         * @memberof user.SetUserInfoRequest
         * @instance
         */
        SetUserInfoRequest.prototype.auth = null;

        /**
         * SetUserInfoRequest nickname.
         * @member {string|null|undefined} nickname
         * @memberof user.SetUserInfoRequest
         * @instance
         */
        SetUserInfoRequest.prototype.nickname = null;

        /**
         * SetUserInfoRequest avatar.
         * @member {string|null|undefined} avatar
         * @memberof user.SetUserInfoRequest
         * @instance
         */
        SetUserInfoRequest.prototype.avatar = null;

        /**
         * SetUserInfoRequest sex.
         * @member {user.Sex|null|undefined} sex
         * @memberof user.SetUserInfoRequest
         * @instance
         */
        SetUserInfoRequest.prototype.sex = null;

        /**
         * SetUserInfoRequest bio.
         * @member {string|null|undefined} bio
         * @memberof user.SetUserInfoRequest
         * @instance
         */
        SetUserInfoRequest.prototype.bio = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * SetUserInfoRequest _nickname.
         * @member {"nickname"|undefined} _nickname
         * @memberof user.SetUserInfoRequest
         * @instance
         */
        Object.defineProperty(SetUserInfoRequest.prototype, "_nickname", {
            get: $util.oneOfGetter($oneOfFields = ["nickname"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * SetUserInfoRequest _avatar.
         * @member {"avatar"|undefined} _avatar
         * @memberof user.SetUserInfoRequest
         * @instance
         */
        Object.defineProperty(SetUserInfoRequest.prototype, "_avatar", {
            get: $util.oneOfGetter($oneOfFields = ["avatar"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * SetUserInfoRequest _sex.
         * @member {"sex"|undefined} _sex
         * @memberof user.SetUserInfoRequest
         * @instance
         */
        Object.defineProperty(SetUserInfoRequest.prototype, "_sex", {
            get: $util.oneOfGetter($oneOfFields = ["sex"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * SetUserInfoRequest _bio.
         * @member {"bio"|undefined} _bio
         * @memberof user.SetUserInfoRequest
         * @instance
         */
        Object.defineProperty(SetUserInfoRequest.prototype, "_bio", {
            get: $util.oneOfGetter($oneOfFields = ["bio"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SetUserInfoRequest instance using the specified properties.
         * @function create
         * @memberof user.SetUserInfoRequest
         * @static
         * @param {user.ISetUserInfoRequest=} [properties] Properties to set
         * @returns {user.SetUserInfoRequest} SetUserInfoRequest instance
         */
        SetUserInfoRequest.create = function create(properties) {
            return new SetUserInfoRequest(properties);
        };

        /**
         * Encodes the specified SetUserInfoRequest message. Does not implicitly {@link user.SetUserInfoRequest.verify|verify} messages.
         * @function encode
         * @memberof user.SetUserInfoRequest
         * @static
         * @param {user.ISetUserInfoRequest} message SetUserInfoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetUserInfoRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.auth != null && Object.hasOwnProperty.call(message, "auth"))
                $root.auth.Authorization.encode(message.auth, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 21, wireType 2 =*/170).string(message.nickname);
            if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                writer.uint32(/* id 22, wireType 2 =*/178).string(message.avatar);
            if (message.sex != null && Object.hasOwnProperty.call(message, "sex"))
                writer.uint32(/* id 23, wireType 0 =*/184).int32(message.sex);
            if (message.bio != null && Object.hasOwnProperty.call(message, "bio"))
                writer.uint32(/* id 24, wireType 2 =*/194).string(message.bio);
            return writer;
        };

        /**
         * Encodes the specified SetUserInfoRequest message, length delimited. Does not implicitly {@link user.SetUserInfoRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.SetUserInfoRequest
         * @static
         * @param {user.ISetUserInfoRequest} message SetUserInfoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetUserInfoRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetUserInfoRequest message from the specified reader or buffer.
         * @function decode
         * @memberof user.SetUserInfoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.SetUserInfoRequest} SetUserInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetUserInfoRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.SetUserInfoRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.auth = $root.auth.Authorization.decode(reader, reader.uint32());
                        break;
                    }
                case 21: {
                        message.nickname = reader.string();
                        break;
                    }
                case 22: {
                        message.avatar = reader.string();
                        break;
                    }
                case 23: {
                        message.sex = reader.int32();
                        break;
                    }
                case 24: {
                        message.bio = reader.string();
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
         * Decodes a SetUserInfoRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.SetUserInfoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.SetUserInfoRequest} SetUserInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetUserInfoRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetUserInfoRequest message.
         * @function verify
         * @memberof user.SetUserInfoRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetUserInfoRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.auth != null && message.hasOwnProperty("auth")) {
                var error = $root.auth.Authorization.verify(message.auth);
                if (error)
                    return "auth." + error;
            }
            if (message.nickname != null && message.hasOwnProperty("nickname")) {
                properties._nickname = 1;
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            }
            if (message.avatar != null && message.hasOwnProperty("avatar")) {
                properties._avatar = 1;
                if (!$util.isString(message.avatar))
                    return "avatar: string expected";
            }
            if (message.sex != null && message.hasOwnProperty("sex")) {
                properties._sex = 1;
                switch (message.sex) {
                default:
                    return "sex: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            }
            if (message.bio != null && message.hasOwnProperty("bio")) {
                properties._bio = 1;
                if (!$util.isString(message.bio))
                    return "bio: string expected";
            }
            return null;
        };

        /**
         * Creates a SetUserInfoRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.SetUserInfoRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.SetUserInfoRequest} SetUserInfoRequest
         */
        SetUserInfoRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.user.SetUserInfoRequest)
                return object;
            var message = new $root.user.SetUserInfoRequest();
            if (object.auth != null) {
                if (typeof object.auth !== "object")
                    throw TypeError(".user.SetUserInfoRequest.auth: object expected");
                message.auth = $root.auth.Authorization.fromObject(object.auth);
            }
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.avatar != null)
                message.avatar = String(object.avatar);
            switch (object.sex) {
            default:
                if (typeof object.sex === "number") {
                    message.sex = object.sex;
                    break;
                }
                break;
            case "UNKONWN":
            case 0:
                message.sex = 0;
                break;
            case "MAN":
            case 1:
                message.sex = 1;
                break;
            case "WOMAN":
            case 2:
                message.sex = 2;
                break;
            }
            if (object.bio != null)
                message.bio = String(object.bio);
            return message;
        };

        /**
         * Creates a plain object from a SetUserInfoRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.SetUserInfoRequest
         * @static
         * @param {user.SetUserInfoRequest} message SetUserInfoRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetUserInfoRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.auth = null;
            if (message.auth != null && message.hasOwnProperty("auth"))
                object.auth = $root.auth.Authorization.toObject(message.auth, options);
            if (message.nickname != null && message.hasOwnProperty("nickname")) {
                object.nickname = message.nickname;
                if (options.oneofs)
                    object._nickname = "nickname";
            }
            if (message.avatar != null && message.hasOwnProperty("avatar")) {
                object.avatar = message.avatar;
                if (options.oneofs)
                    object._avatar = "avatar";
            }
            if (message.sex != null && message.hasOwnProperty("sex")) {
                object.sex = options.enums === String ? $root.user.Sex[message.sex] === undefined ? message.sex : $root.user.Sex[message.sex] : message.sex;
                if (options.oneofs)
                    object._sex = "sex";
            }
            if (message.bio != null && message.hasOwnProperty("bio")) {
                object.bio = message.bio;
                if (options.oneofs)
                    object._bio = "bio";
            }
            return object;
        };

        /**
         * Converts this SetUserInfoRequest to JSON.
         * @function toJSON
         * @memberof user.SetUserInfoRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetUserInfoRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetUserInfoRequest
         * @function getTypeUrl
         * @memberof user.SetUserInfoRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetUserInfoRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/user.SetUserInfoRequest";
        };

        return SetUserInfoRequest;
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
        ChangePasswdRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.ChangePasswdRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
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
         * Callback as used by {@link user.UserService#logout}.
         * @memberof user.UserService
         * @typedef LogoutCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {common.Empty} [response] Empty
         */

        /**
         * Calls Logout.
         * @function logout
         * @memberof user.UserService
         * @instance
         * @param {auth.IAuthData} request AuthData message or plain object
         * @param {user.UserService.LogoutCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.logout = function logout(request, callback) {
            return this.rpcCall(logout, $root.auth.AuthData, $root.common.Empty, request, callback);
        }, "name", { value: "Logout" });

        /**
         * Calls Logout.
         * @function logout
         * @memberof user.UserService
         * @instance
         * @param {auth.IAuthData} request AuthData message or plain object
         * @returns {Promise<common.Empty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link user.UserService#threeLogin}.
         * @memberof user.UserService
         * @typedef ThreeLoginCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {user.LoginResponse} [response] LoginResponse
         */

        /**
         * Calls ThreeLogin.
         * @function threeLogin
         * @memberof user.UserService
         * @instance
         * @param {user.IThreeLoginRequest} request ThreeLoginRequest message or plain object
         * @param {user.UserService.ThreeLoginCallback} callback Node-style callback called with the error, if any, and LoginResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.threeLogin = function threeLogin(request, callback) {
            return this.rpcCall(threeLogin, $root.user.ThreeLoginRequest, $root.user.LoginResponse, request, callback);
        }, "name", { value: "ThreeLogin" });

        /**
         * Calls ThreeLogin.
         * @function threeLogin
         * @memberof user.UserService
         * @instance
         * @param {user.IThreeLoginRequest} request ThreeLoginRequest message or plain object
         * @returns {Promise<user.LoginResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link user.UserService#getUserInfo}.
         * @memberof user.UserService
         * @typedef GetUserInfoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {user.User} [response] User
         */

        /**
         * Calls GetUserInfo.
         * @function getUserInfo
         * @memberof user.UserService
         * @instance
         * @param {auth.IAuthData} request AuthData message or plain object
         * @param {user.UserService.GetUserInfoCallback} callback Node-style callback called with the error, if any, and User
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.getUserInfo = function getUserInfo(request, callback) {
            return this.rpcCall(getUserInfo, $root.auth.AuthData, $root.user.User, request, callback);
        }, "name", { value: "GetUserInfo" });

        /**
         * Calls GetUserInfo.
         * @function getUserInfo
         * @memberof user.UserService
         * @instance
         * @param {auth.IAuthData} request AuthData message or plain object
         * @returns {Promise<user.User>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link user.UserService#setUserInfo}.
         * @memberof user.UserService
         * @typedef SetUserInfoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {common.Empty} [response] Empty
         */

        /**
         * Calls SetUserInfo.
         * @function setUserInfo
         * @memberof user.UserService
         * @instance
         * @param {user.ISetUserInfoRequest} request SetUserInfoRequest message or plain object
         * @param {user.UserService.SetUserInfoCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.setUserInfo = function setUserInfo(request, callback) {
            return this.rpcCall(setUserInfo, $root.user.SetUserInfoRequest, $root.common.Empty, request, callback);
        }, "name", { value: "SetUserInfo" });

        /**
         * Calls SetUserInfo.
         * @function setUserInfo
         * @memberof user.UserService
         * @instance
         * @param {user.ISetUserInfoRequest} request SetUserInfoRequest message or plain object
         * @returns {Promise<common.Empty>} Promise
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
