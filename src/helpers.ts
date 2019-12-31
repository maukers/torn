/**
 * Valid API field that could have a different type in some circumstances,
 * eg. `null` when the player is traveling.
 */
export type unconfirmed<T> = T

/**
 * Valid API field that still needs explicit types.
 */
export type incomplete<T> = T

/**
 *  Valid API object that's not yet documented.
 */
export type unimplemented = Record<string, any>

/**
 * Utility type: generates an intersection type from a union type.
 */
export type Intersection<T> =
	(T extends T ? ((p: T) => void) : never) extends (p: infer U) => void
	? U : never
