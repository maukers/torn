import { incomplete, unconfirmed } from '../helpers';
export declare type PropertyResource = {
    property: Property;
    timestamp: Timestamp;
};
export declare type Property = {
    owner_id: number;
    property_type: incomplete<number>;
    happy: number;
    upkeep: number;
    upgrades: incomplete<string[]>;
    staff: incomplete<string[]>;
    rented: {
        user_id: unconfirmed<'' | string>;
        days_left: unconfirmed<''>;
        total_cost: unconfirmed<''>;
        cost_per_day: unconfirmed<''>;
    };
    /**
     * When multiple players are on the property,
     * it's a string with comma-separated numbers.
     */
    users_living: number | string;
};
export declare type Timestamp = {
    timestamp: number;
};
