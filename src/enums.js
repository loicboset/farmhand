/**
 * @module farmhand.enums
 */

/**
 * @param {Array.<string>} keys
 * @returns {Object.<string>}
 */
const enumify = keys => keys.reduce((acc, key) => ({ [key]: key, ...acc }), {});

/**
 * @property farmhand.module:enums.cropType
 * @enum {string}
 */
export const cropType = enumify(['CARROT', 'PUMPKIN']);

/**
 * @property farmhand.module:enums.toolType
 * @enum {string}
 */
export const toolType = enumify(['NONE', 'HOE', 'SCYTHE', 'WATERING_CAN']);

/**
 * @property farmhand.module:enums.stageFocusType
 * @enum {string}
 */
export const stageFocusType = enumify(['NONE', 'FIELD', 'INVENTORY', 'SHOP']);

/**
 * @property farmhand.module:enums.cropLifeStage
 * @enum {string}
 */
export const cropLifeStage = enumify(['SEED', 'GROWING', 'GROWN']);
