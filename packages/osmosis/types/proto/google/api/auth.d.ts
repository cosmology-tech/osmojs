import Long from "long";
import * as _m0 from "protobufjs/minimal";
/**
 * `Authentication` defines the authentication configuration for API methods
 * provided by an API service.
 *
 * Example:
 *
 *     name: calendar.googleapis.com
 *     authentication:
 *       providers:
 *       - id: google_calendar_auth
 *         jwks_uri: https://www.googleapis.com/oauth2/v1/certs
 *         issuer: https://securetoken.google.com
 *       rules:
 *       - selector: "*"
 *         requirements:
 *           provider_id: google_calendar_auth
 *       - selector: google.calendar.Delegate
 *         oauth:
 *           canonical_scopes: https://www.googleapis.com/auth/calendar.read
 */
export interface Authentication {
    /**
     * A list of authentication rules that apply to individual API methods.
     *
     * **NOTE:** All service configuration rules follow "last one wins" order.
     */
    rules: AuthenticationRule[];
    /** Defines a set of authentication providers that a service supports. */
    providers: AuthProvider[];
}
/**
 * Authentication rules for the service.
 *
 * By default, if a method has any authentication requirements, every request
 * must include a valid credential matching one of the requirements.
 * It's an error to include more than one kind of credential in a single
 * request.
 *
 * If a method doesn't have any auth requirements, request credentials will be
 * ignored.
 */
export interface AuthenticationRule {
    /**
     * Selects the methods to which this rule applies.
     *
     * Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
     */
    selector: string;
    /** The requirements for OAuth credentials. */
    oauth: OAuthRequirements;
    /**
     * If true, the service accepts API keys without any other credential.
     * This flag only applies to HTTP and gRPC requests.
     */
    allowWithoutCredential: boolean;
    /** Requirements for additional authentication providers. */
    requirements: AuthRequirement[];
}
/** Specifies a location to extract JWT from an API request. */
export interface JwtLocation {
    /** Specifies HTTP header name to extract JWT token. */
    header: string | undefined;
    /** Specifies URL query parameter name to extract JWT token. */
    query: string | undefined;
    /**
     * The value prefix. The value format is "value_prefix{token}"
     * Only applies to "in" header type. Must be empty for "in" query type.
     * If not empty, the header value has to match (case sensitive) this prefix.
     * If not matched, JWT will not be extracted. If matched, JWT will be
     * extracted after the prefix is removed.
     *
     * For example, for "Authorization: Bearer {JWT}",
     * value_prefix="Bearer " with a space at the end.
     */
    valuePrefix: string;
}
/**
 * Configuration for an authentication provider, including support for
 * [JSON Web Token
 * (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).
 */
export interface AuthProvider {
    /**
     * The unique identifier of the auth provider. It will be referred to by
     * `AuthRequirement.provider_id`.
     *
     * Example: "bookstore_auth".
     */
    id: string;
    /**
     * Identifies the principal that issued the JWT. See
     * https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.1
     * Usually a URL or an email address.
     *
     * Example: https://securetoken.google.com
     * Example: 1234567-compute@developer.gserviceaccount.com
     */
    issuer: string;
    /**
     * URL of the provider's public key set to validate signature of the JWT. See
     * [OpenID
     * Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
     * Optional if the key set document:
     *  - can be retrieved from
     *    [OpenID
     *    Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html)
     *    of the issuer.
     *  - can be inferred from the email domain of the issuer (e.g. a Google
     *  service account).
     *
     * Example: https://www.googleapis.com/oauth2/v1/certs
     */
    jwksUri: string;
    /**
     * The list of JWT
     * [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3).
     * that are allowed to access. A JWT containing any of these audiences will
     * be accepted. When this setting is absent, JWTs with audiences:
     *   - "https://[service.name]/[google.protobuf.Api.name]"
     *   - "https://[service.name]/"
     * will be accepted.
     * For example, if no audiences are in the setting, LibraryService API will
     * accept JWTs with the following audiences:
     *   -
     *   https://library-example.googleapis.com/google.example.library.v1.LibraryService
     *   - https://library-example.googleapis.com/
     *
     * Example:
     *
     *     audiences: bookstore_android.apps.googleusercontent.com,
     *                bookstore_web.apps.googleusercontent.com
     */
    audiences: string;
    /**
     * Redirect URL if JWT token is required but not present or is expired.
     * Implement authorizationUrl of securityDefinitions in OpenAPI spec.
     */
    authorizationUrl: string;
    /**
     * Defines the locations to extract the JWT.
     *
     * JWT locations can be either from HTTP headers or URL query parameters.
     * The rule is that the first match wins. The checking order is: checking
     * all headers first, then URL query parameters.
     *
     * If not specified,  default to use following 3 locations:
     *    1) Authorization: Bearer
     *    2) x-goog-iap-jwt-assertion
     *    3) access_token query parameter
     *
     * Default locations can be specified as followings:
     *    jwt_locations:
     *    - header: Authorization
     *      value_prefix: "Bearer "
     *    - header: x-goog-iap-jwt-assertion
     *    - query: access_token
     */
    jwtLocations: JwtLocation[];
}
/**
 * OAuth scopes are a way to define data and permissions on data. For example,
 * there are scopes defined for "Read-only access to Google Calendar" and
 * "Access to Cloud Platform". Users can consent to a scope for an application,
 * giving it permission to access that data on their behalf.
 *
 * OAuth scope specifications should be fairly coarse grained; a user will need
 * to see and understand the text description of what your scope means.
 *
 * In most cases: use one or at most two OAuth scopes for an entire family of
 * products. If your product has multiple APIs, you should probably be sharing
 * the OAuth scope across all of those APIs.
 *
 * When you need finer grained OAuth consent screens: talk with your product
 * management about how developers will use them in practice.
 *
 * Please note that even though each of the canonical scopes is enough for a
 * request to be accepted and passed to the backend, a request can still fail
 * due to the backend requiring additional scopes or permissions.
 */
export interface OAuthRequirements {
    /**
     * The list of publicly documented OAuth scopes that are allowed access. An
     * OAuth token containing any of these scopes will be accepted.
     *
     * Example:
     *
     *      canonical_scopes: https://www.googleapis.com/auth/calendar,
     *                        https://www.googleapis.com/auth/calendar.read
     */
    canonicalScopes: string;
}
/**
 * User-defined authentication requirements, including support for
 * [JSON Web Token
 * (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).
 */
export interface AuthRequirement {
    /**
     * [id][google.api.AuthProvider.id] from authentication provider.
     *
     * Example:
     *
     *     provider_id: bookstore_auth
     */
    providerId: string;
    /**
     * NOTE: This will be deprecated soon, once AuthProvider.audiences is
     * implemented and accepted in all the runtime components.
     *
     * The list of JWT
     * [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3).
     * that are allowed to access. A JWT containing any of these audiences will
     * be accepted. When this setting is absent, only JWTs with audience
     * "https://[Service_name][google.api.Service.name]/[API_name][google.protobuf.Api.name]"
     * will be accepted. For example, if no audiences are in the setting,
     * LibraryService API will only accept JWTs with the following audience
     * "https://library-example.googleapis.com/google.example.library.v1.LibraryService".
     *
     * Example:
     *
     *     audiences: bookstore_android.apps.googleusercontent.com,
     *                bookstore_web.apps.googleusercontent.com
     */
    audiences: string;
}
export declare const Authentication: {
    encode(message: Authentication, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Authentication;
    fromJSON(object: any): Authentication;
    toJSON(message: Authentication): unknown;
    fromPartial<I extends unknown>(object: I): Authentication;
};
export declare const AuthenticationRule: {
    encode(message: AuthenticationRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticationRule;
    fromJSON(object: any): AuthenticationRule;
    toJSON(message: AuthenticationRule): unknown;
    fromPartial<I extends unknown>(object: I): AuthenticationRule;
};
export declare const JwtLocation: {
    encode(message: JwtLocation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): JwtLocation;
    fromJSON(object: any): JwtLocation;
    toJSON(message: JwtLocation): unknown;
    fromPartial<I extends unknown>(object: I): JwtLocation;
};
export declare const AuthProvider: {
    encode(message: AuthProvider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthProvider;
    fromJSON(object: any): AuthProvider;
    toJSON(message: AuthProvider): unknown;
    fromPartial<I extends unknown>(object: I): AuthProvider;
};
export declare const OAuthRequirements: {
    encode(message: OAuthRequirements, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OAuthRequirements;
    fromJSON(object: any): OAuthRequirements;
    toJSON(message: OAuthRequirements): unknown;
    fromPartial<I extends unknown>(object: I): OAuthRequirements;
};
export declare const AuthRequirement: {
    encode(message: AuthRequirement, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthRequirement;
    fromJSON(object: any): AuthRequirement;
    toJSON(message: AuthRequirement): unknown;
    fromPartial<I extends unknown>(object: I): AuthRequirement;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
