import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace common. */
export namespace common {

    /** Properties of an Empty. */
    interface IEmpty {
    }

    /** Represents an Empty. */
    class Empty implements IEmpty {

        /**
         * Constructs a new Empty.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IEmpty);

        /**
         * Creates a new Empty instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Empty instance
         */
        public static create(properties?: common.IEmpty): common.Empty;

        /**
         * Encodes the specified Empty message. Does not implicitly {@link common.Empty.verify|verify} messages.
         * @param message Empty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link common.Empty.verify|verify} messages.
         * @param message Empty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.Empty;

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.Empty;

        /**
         * Verifies an Empty message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Empty message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Empty
         */
        public static fromObject(object: { [k: string]: any }): common.Empty;

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @param message Empty
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Empty to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Empty
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SubscribeRequest. */
    interface ISubscribeRequest {

        /** SubscribeRequest intervalMin */
        intervalMin?: (number|Long|null);

        /** SubscribeRequest intervalMax */
        intervalMax?: (number|Long|null);
    }

    /** Represents a SubscribeRequest. */
    class SubscribeRequest implements ISubscribeRequest {

        /**
         * Constructs a new SubscribeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.ISubscribeRequest);

        /** SubscribeRequest intervalMin. */
        public intervalMin: (number|Long);

        /** SubscribeRequest intervalMax. */
        public intervalMax: (number|Long);

        /**
         * Creates a new SubscribeRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SubscribeRequest instance
         */
        public static create(properties?: common.ISubscribeRequest): common.SubscribeRequest;

        /**
         * Encodes the specified SubscribeRequest message. Does not implicitly {@link common.SubscribeRequest.verify|verify} messages.
         * @param message SubscribeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.ISubscribeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SubscribeRequest message, length delimited. Does not implicitly {@link common.SubscribeRequest.verify|verify} messages.
         * @param message SubscribeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.ISubscribeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SubscribeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SubscribeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.SubscribeRequest;

        /**
         * Decodes a SubscribeRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SubscribeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.SubscribeRequest;

        /**
         * Verifies a SubscribeRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SubscribeRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SubscribeRequest
         */
        public static fromObject(object: { [k: string]: any }): common.SubscribeRequest;

        /**
         * Creates a plain object from a SubscribeRequest message. Also converts values to other types if specified.
         * @param message SubscribeRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.SubscribeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SubscribeRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SubscribeRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace user. */
export namespace user {

    /** Properties of an Authorization. */
    interface IAuthorization {

        /** Authorization jwt */
        jwt?: (string|null);
    }

    /** Represents an Authorization. */
    class Authorization implements IAuthorization {

        /**
         * Constructs a new Authorization.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IAuthorization);

        /** Authorization jwt. */
        public jwt: string;

        /**
         * Creates a new Authorization instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Authorization instance
         */
        public static create(properties?: user.IAuthorization): user.Authorization;

        /**
         * Encodes the specified Authorization message. Does not implicitly {@link user.Authorization.verify|verify} messages.
         * @param message Authorization message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IAuthorization, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Authorization message, length delimited. Does not implicitly {@link user.Authorization.verify|verify} messages.
         * @param message Authorization message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IAuthorization, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Authorization message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Authorization
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.Authorization;

        /**
         * Decodes an Authorization message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Authorization
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.Authorization;

        /**
         * Verifies an Authorization message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Authorization message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Authorization
         */
        public static fromObject(object: { [k: string]: any }): user.Authorization;

        /**
         * Creates a plain object from an Authorization message. Also converts values to other types if specified.
         * @param message Authorization
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.Authorization, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Authorization to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Authorization
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoginRequest. */
    interface ILoginRequest {

        /** LoginRequest timestamp */
        timestamp?: (number|Long|null);

        /** LoginRequest uname */
        uname?: (string|null);

        /** LoginRequest passwd */
        passwd?: (string|null);

        /** LoginRequest deviceId */
        deviceId?: (string|null);

        /** LoginRequest deviceName */
        deviceName?: (string|null);

        /** LoginRequest expire */
        expire?: (number|null);
    }

    /** Represents a LoginRequest. */
    class LoginRequest implements ILoginRequest {

        /**
         * Constructs a new LoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.ILoginRequest);

        /** LoginRequest timestamp. */
        public timestamp: (number|Long);

        /** LoginRequest uname. */
        public uname: string;

        /** LoginRequest passwd. */
        public passwd: string;

        /** LoginRequest deviceId. */
        public deviceId: string;

        /** LoginRequest deviceName. */
        public deviceName: string;

        /** LoginRequest expire. */
        public expire: number;

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRequest instance
         */
        public static create(properties?: user.ILoginRequest): user.LoginRequest;

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link user.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link user.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.LoginRequest;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.LoginRequest;

        /**
         * Verifies a LoginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRequest
         */
        public static fromObject(object: { [k: string]: any }): user.LoginRequest;

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @param message LoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WxLoginRequest. */
    interface IWxLoginRequest {

        /** WxLoginRequest code */
        code?: (string|null);

        /** WxLoginRequest deviceId */
        deviceId?: (string|null);

        /** WxLoginRequest deviceName */
        deviceName?: (string|null);
    }

    /** Represents a WxLoginRequest. */
    class WxLoginRequest implements IWxLoginRequest {

        /**
         * Constructs a new WxLoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IWxLoginRequest);

        /** WxLoginRequest code. */
        public code: string;

        /** WxLoginRequest deviceId. */
        public deviceId: string;

        /** WxLoginRequest deviceName. */
        public deviceName: string;

        /**
         * Creates a new WxLoginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WxLoginRequest instance
         */
        public static create(properties?: user.IWxLoginRequest): user.WxLoginRequest;

        /**
         * Encodes the specified WxLoginRequest message. Does not implicitly {@link user.WxLoginRequest.verify|verify} messages.
         * @param message WxLoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IWxLoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WxLoginRequest message, length delimited. Does not implicitly {@link user.WxLoginRequest.verify|verify} messages.
         * @param message WxLoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IWxLoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WxLoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WxLoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.WxLoginRequest;

        /**
         * Decodes a WxLoginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WxLoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.WxLoginRequest;

        /**
         * Verifies a WxLoginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WxLoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WxLoginRequest
         */
        public static fromObject(object: { [k: string]: any }): user.WxLoginRequest;

        /**
         * Creates a plain object from a WxLoginRequest message. Also converts values to other types if specified.
         * @param message WxLoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.WxLoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WxLoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WxLoginRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoginResponse. */
    interface ILoginResponse {

        /** LoginResponse auth */
        auth?: (user.IAuthorization|null);
    }

    /** Represents a LoginResponse. */
    class LoginResponse implements ILoginResponse {

        /**
         * Constructs a new LoginResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.ILoginResponse);

        /** LoginResponse auth. */
        public auth?: (user.IAuthorization|null);

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginResponse instance
         */
        public static create(properties?: user.ILoginResponse): user.LoginResponse;

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link user.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link user.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.LoginResponse;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.LoginResponse;

        /**
         * Verifies a LoginResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginResponse
         */
        public static fromObject(object: { [k: string]: any }): user.LoginResponse;

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @param message LoginResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ChangePasswdRequest. */
    interface IChangePasswdRequest {

        /** ChangePasswdRequest auth */
        auth?: (user.IAuthorization|null);

        /** ChangePasswdRequest passwd */
        passwd?: (string|null);
    }

    /** Represents a ChangePasswdRequest. */
    class ChangePasswdRequest implements IChangePasswdRequest {

        /**
         * Constructs a new ChangePasswdRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IChangePasswdRequest);

        /** ChangePasswdRequest auth. */
        public auth?: (user.IAuthorization|null);

        /** ChangePasswdRequest passwd. */
        public passwd: string;

        /**
         * Creates a new ChangePasswdRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangePasswdRequest instance
         */
        public static create(properties?: user.IChangePasswdRequest): user.ChangePasswdRequest;

        /**
         * Encodes the specified ChangePasswdRequest message. Does not implicitly {@link user.ChangePasswdRequest.verify|verify} messages.
         * @param message ChangePasswdRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IChangePasswdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangePasswdRequest message, length delimited. Does not implicitly {@link user.ChangePasswdRequest.verify|verify} messages.
         * @param message ChangePasswdRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IChangePasswdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangePasswdRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangePasswdRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.ChangePasswdRequest;

        /**
         * Decodes a ChangePasswdRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangePasswdRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.ChangePasswdRequest;

        /**
         * Verifies a ChangePasswdRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangePasswdRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangePasswdRequest
         */
        public static fromObject(object: { [k: string]: any }): user.ChangePasswdRequest;

        /**
         * Creates a plain object from a ChangePasswdRequest message. Also converts values to other types if specified.
         * @param message ChangePasswdRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.ChangePasswdRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangePasswdRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ChangePasswdRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Represents a UserService */
    class UserService extends $protobuf.rpc.Service {

        /**
         * Constructs a new UserService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new UserService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): UserService;

        /**
         * Calls Login.
         * @param request LoginRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and LoginResponse
         */
        public login(request: user.ILoginRequest, callback: user.UserService.LoginCallback): void;

        /**
         * Calls Login.
         * @param request LoginRequest message or plain object
         * @returns Promise
         */
        public login(request: user.ILoginRequest): Promise<user.LoginResponse>;

        /**
         * Calls WxLogin.
         * @param request WxLoginRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and LoginResponse
         */
        public wxLogin(request: user.IWxLoginRequest, callback: user.UserService.WxLoginCallback): void;

        /**
         * Calls WxLogin.
         * @param request WxLoginRequest message or plain object
         * @returns Promise
         */
        public wxLogin(request: user.IWxLoginRequest): Promise<user.LoginResponse>;

        /**
         * Calls ChangePasswd.
         * @param request ChangePasswdRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public changePasswd(request: user.IChangePasswdRequest, callback: user.UserService.ChangePasswdCallback): void;

        /**
         * Calls ChangePasswd.
         * @param request ChangePasswdRequest message or plain object
         * @returns Promise
         */
        public changePasswd(request: user.IChangePasswdRequest): Promise<common.Empty>;
    }

    namespace UserService {

        /**
         * Callback as used by {@link user.UserService#login}.
         * @param error Error, if any
         * @param [response] LoginResponse
         */
        type LoginCallback = (error: (Error|null), response?: user.LoginResponse) => void;

        /**
         * Callback as used by {@link user.UserService#wxLogin}.
         * @param error Error, if any
         * @param [response] LoginResponse
         */
        type WxLoginCallback = (error: (Error|null), response?: user.LoginResponse) => void;

        /**
         * Callback as used by {@link user.UserService#changePasswd}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type ChangePasswdCallback = (error: (Error|null), response?: common.Empty) => void;
    }
}
