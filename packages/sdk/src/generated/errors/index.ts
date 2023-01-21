/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

type ErrorWithCode = Error & { code: number };
type MaybeErrorWithCode = ErrorWithCode | null | undefined;

const createErrorFromCodeLookup: Map<number, () => ErrorWithCode> = new Map();
const createErrorFromNameLookup: Map<string, () => ErrorWithCode> = new Map();

/**
 * NumericalOverflow: 'Numerical Overflow'
 *
 * @category Errors
 * @category generated
 */
export class NumericalOverflowError extends Error {
  readonly code: number = 0x0;
  readonly name: string = 'NumericalOverflow';
  constructor() {
    super('Numerical Overflow');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, NumericalOverflowError);
    }
  }
}

createErrorFromCodeLookup.set(0x0, () => new NumericalOverflowError());
createErrorFromNameLookup.set('NumericalOverflow', () => new NumericalOverflowError());

/**
 * DataTypeMismatch: 'Data type mismatch'
 *
 * @category Errors
 * @category generated
 */
export class DataTypeMismatchError extends Error {
  readonly code: number = 0x1;
  readonly name: string = 'DataTypeMismatch';
  constructor() {
    super('Data type mismatch');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, DataTypeMismatchError);
    }
  }
}

createErrorFromCodeLookup.set(0x1, () => new DataTypeMismatchError());
createErrorFromNameLookup.set('DataTypeMismatch', () => new DataTypeMismatchError());

/**
 * DataSliceUnexpectedIndexError: 'Data slice unexpected index error'
 *
 * @category Errors
 * @category generated
 */
export class DataSliceUnexpectedIndexErrorError extends Error {
  readonly code: number = 0x2;
  readonly name: string = 'DataSliceUnexpectedIndexError';
  constructor() {
    super('Data slice unexpected index error');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, DataSliceUnexpectedIndexErrorError);
    }
  }
}

createErrorFromCodeLookup.set(0x2, () => new DataSliceUnexpectedIndexErrorError());
createErrorFromNameLookup.set(
  'DataSliceUnexpectedIndexError',
  () => new DataSliceUnexpectedIndexErrorError(),
);

/**
 * IncorrectOwner: 'Incorrect account owner'
 *
 * @category Errors
 * @category generated
 */
export class IncorrectOwnerError extends Error {
  readonly code: number = 0x3;
  readonly name: string = 'IncorrectOwner';
  constructor() {
    super('Incorrect account owner');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, IncorrectOwnerError);
    }
  }
}

createErrorFromCodeLookup.set(0x3, () => new IncorrectOwnerError());
createErrorFromNameLookup.set('IncorrectOwner', () => new IncorrectOwnerError());

/**
 * PayloadVecIndexError: 'Could not index into PayloadVec'
 *
 * @category Errors
 * @category generated
 */
export class PayloadVecIndexErrorError extends Error {
  readonly code: number = 0x4;
  readonly name: string = 'PayloadVecIndexError';
  constructor() {
    super('Could not index into PayloadVec');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, PayloadVecIndexErrorError);
    }
  }
}

createErrorFromCodeLookup.set(0x4, () => new PayloadVecIndexErrorError());
createErrorFromNameLookup.set('PayloadVecIndexError', () => new PayloadVecIndexErrorError());

/**
 * DerivedKeyInvalid: 'Derived key invalid'
 *
 * @category Errors
 * @category generated
 */
export class DerivedKeyInvalidError extends Error {
  readonly code: number = 0x5;
  readonly name: string = 'DerivedKeyInvalid';
  constructor() {
    super('Derived key invalid');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, DerivedKeyInvalidError);
    }
  }
}

createErrorFromCodeLookup.set(0x5, () => new DerivedKeyInvalidError());
createErrorFromNameLookup.set('DerivedKeyInvalid', () => new DerivedKeyInvalidError());

/**
 * PayerIsNotSigner: 'Payer is not a signer'
 *
 * @category Errors
 * @category generated
 */
export class PayerIsNotSignerError extends Error {
  readonly code: number = 0x6;
  readonly name: string = 'PayerIsNotSigner';
  constructor() {
    super('Payer is not a signer');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, PayerIsNotSignerError);
    }
  }
}

createErrorFromCodeLookup.set(0x6, () => new PayerIsNotSignerError());
createErrorFromNameLookup.set('PayerIsNotSigner', () => new PayerIsNotSignerError());

/**
 * NotImplemented: 'Not implemented'
 *
 * @category Errors
 * @category generated
 */
export class NotImplementedError extends Error {
  readonly code: number = 0x7;
  readonly name: string = 'NotImplemented';
  constructor() {
    super('Not implemented');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, NotImplementedError);
    }
  }
}

createErrorFromCodeLookup.set(0x7, () => new NotImplementedError());
createErrorFromNameLookup.set('NotImplemented', () => new NotImplementedError());

/**
 * BorshSerializationError: 'Borsh serialization error'
 *
 * @category Errors
 * @category generated
 */
export class BorshSerializationErrorError extends Error {
  readonly code: number = 0x8;
  readonly name: string = 'BorshSerializationError';
  constructor() {
    super('Borsh serialization error');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, BorshSerializationErrorError);
    }
  }
}

createErrorFromCodeLookup.set(0x8, () => new BorshSerializationErrorError());
createErrorFromNameLookup.set('BorshSerializationError', () => new BorshSerializationErrorError());

/**
 * BorshDeserializationError: 'Borsh deserialization error'
 *
 * @category Errors
 * @category generated
 */
export class BorshDeserializationErrorError extends Error {
  readonly code: number = 0x9;
  readonly name: string = 'BorshDeserializationError';
  constructor() {
    super('Borsh deserialization error');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, BorshDeserializationErrorError);
    }
  }
}

createErrorFromCodeLookup.set(0x9, () => new BorshDeserializationErrorError());
createErrorFromNameLookup.set(
  'BorshDeserializationError',
  () => new BorshDeserializationErrorError(),
);

/**
 * ValueOccupied: 'Value in Payload or RuleSet is occupied'
 *
 * @category Errors
 * @category generated
 */
export class ValueOccupiedError extends Error {
  readonly code: number = 0xa;
  readonly name: string = 'ValueOccupied';
  constructor() {
    super('Value in Payload or RuleSet is occupied');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, ValueOccupiedError);
    }
  }
}

createErrorFromCodeLookup.set(0xa, () => new ValueOccupiedError());
createErrorFromNameLookup.set('ValueOccupied', () => new ValueOccupiedError());

/**
 * DataIsEmpty: 'Account data is empty'
 *
 * @category Errors
 * @category generated
 */
export class DataIsEmptyError extends Error {
  readonly code: number = 0xb;
  readonly name: string = 'DataIsEmpty';
  constructor() {
    super('Account data is empty');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, DataIsEmptyError);
    }
  }
}

createErrorFromCodeLookup.set(0xb, () => new DataIsEmptyError());
createErrorFromNameLookup.set('DataIsEmpty', () => new DataIsEmptyError());

/**
 * MessagePackSerializationError: 'MessagePack serialization error'
 *
 * @category Errors
 * @category generated
 */
export class MessagePackSerializationErrorError extends Error {
  readonly code: number = 0xc;
  readonly name: string = 'MessagePackSerializationError';
  constructor() {
    super('MessagePack serialization error');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, MessagePackSerializationErrorError);
    }
  }
}

createErrorFromCodeLookup.set(0xc, () => new MessagePackSerializationErrorError());
createErrorFromNameLookup.set(
  'MessagePackSerializationError',
  () => new MessagePackSerializationErrorError(),
);

/**
 * MessagePackDeserializationError: 'MessagePack deserialization error'
 *
 * @category Errors
 * @category generated
 */
export class MessagePackDeserializationErrorError extends Error {
  readonly code: number = 0xd;
  readonly name: string = 'MessagePackDeserializationError';
  constructor() {
    super('MessagePack deserialization error');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, MessagePackDeserializationErrorError);
    }
  }
}

createErrorFromCodeLookup.set(0xd, () => new MessagePackDeserializationErrorError());
createErrorFromNameLookup.set(
  'MessagePackDeserializationError',
  () => new MessagePackDeserializationErrorError(),
);

/**
 * MissingAccount: 'Missing account'
 *
 * @category Errors
 * @category generated
 */
export class MissingAccountError extends Error {
  readonly code: number = 0xe;
  readonly name: string = 'MissingAccount';
  constructor() {
    super('Missing account');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, MissingAccountError);
    }
  }
}

createErrorFromCodeLookup.set(0xe, () => new MissingAccountError());
createErrorFromNameLookup.set('MissingAccount', () => new MissingAccountError());

/**
 * MissingPayloadValue: 'Missing Payload value'
 *
 * @category Errors
 * @category generated
 */
export class MissingPayloadValueError extends Error {
  readonly code: number = 0xf;
  readonly name: string = 'MissingPayloadValue';
  constructor() {
    super('Missing Payload value');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, MissingPayloadValueError);
    }
  }
}

createErrorFromCodeLookup.set(0xf, () => new MissingPayloadValueError());
createErrorFromNameLookup.set('MissingPayloadValue', () => new MissingPayloadValueError());

/**
 * RuleSetOwnerMismatch: 'RuleSet owner must be payer'
 *
 * @category Errors
 * @category generated
 */
export class RuleSetOwnerMismatchError extends Error {
  readonly code: number = 0x10;
  readonly name: string = 'RuleSetOwnerMismatch';
  constructor() {
    super('RuleSet owner must be payer');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, RuleSetOwnerMismatchError);
    }
  }
}

createErrorFromCodeLookup.set(0x10, () => new RuleSetOwnerMismatchError());
createErrorFromNameLookup.set('RuleSetOwnerMismatch', () => new RuleSetOwnerMismatchError());

/**
 * NameTooLong: 'Name too long'
 *
 * @category Errors
 * @category generated
 */
export class NameTooLongError extends Error {
  readonly code: number = 0x11;
  readonly name: string = 'NameTooLong';
  constructor() {
    super('Name too long');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, NameTooLongError);
    }
  }
}

createErrorFromCodeLookup.set(0x11, () => new NameTooLongError());
createErrorFromNameLookup.set('NameTooLong', () => new NameTooLongError());

/**
 * OperationNotFound: 'The operation retrieved is not in the selected RuleSet'
 *
 * @category Errors
 * @category generated
 */
export class OperationNotFoundError extends Error {
  readonly code: number = 0x12;
  readonly name: string = 'OperationNotFound';
  constructor() {
    super('The operation retrieved is not in the selected RuleSet');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, OperationNotFoundError);
    }
  }
}

createErrorFromCodeLookup.set(0x12, () => new OperationNotFoundError());
createErrorFromNameLookup.set('OperationNotFound', () => new OperationNotFoundError());

/**
 * RuleAuthorityIsNotSigner: 'Rule authority is not signer'
 *
 * @category Errors
 * @category generated
 */
export class RuleAuthorityIsNotSignerError extends Error {
  readonly code: number = 0x13;
  readonly name: string = 'RuleAuthorityIsNotSigner';
  constructor() {
    super('Rule authority is not signer');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, RuleAuthorityIsNotSignerError);
    }
  }
}

createErrorFromCodeLookup.set(0x13, () => new RuleAuthorityIsNotSignerError());
createErrorFromNameLookup.set(
  'RuleAuthorityIsNotSigner',
  () => new RuleAuthorityIsNotSignerError(),
);

/**
 * UnsupportedRuleSetRevMapVersion: 'Unsupported RuleSet revision map version'
 *
 * @category Errors
 * @category generated
 */
export class UnsupportedRuleSetRevMapVersionError extends Error {
  readonly code: number = 0x14;
  readonly name: string = 'UnsupportedRuleSetRevMapVersion';
  constructor() {
    super('Unsupported RuleSet revision map version');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, UnsupportedRuleSetRevMapVersionError);
    }
  }
}

createErrorFromCodeLookup.set(0x14, () => new UnsupportedRuleSetRevMapVersionError());
createErrorFromNameLookup.set(
  'UnsupportedRuleSetRevMapVersion',
  () => new UnsupportedRuleSetRevMapVersionError(),
);

/**
 * UnsupportedRuleSetVersion: 'Unsupported RuleSet version'
 *
 * @category Errors
 * @category generated
 */
export class UnsupportedRuleSetVersionError extends Error {
  readonly code: number = 0x15;
  readonly name: string = 'UnsupportedRuleSetVersion';
  constructor() {
    super('Unsupported RuleSet version');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, UnsupportedRuleSetVersionError);
    }
  }
}

createErrorFromCodeLookup.set(0x15, () => new UnsupportedRuleSetVersionError());
createErrorFromNameLookup.set(
  'UnsupportedRuleSetVersion',
  () => new UnsupportedRuleSetVersionError(),
);

/**
 * UnexpectedRuleSetFailure: 'Unexpected RuleSet failure'
 *
 * @category Errors
 * @category generated
 */
export class UnexpectedRuleSetFailureError extends Error {
  readonly code: number = 0x16;
  readonly name: string = 'UnexpectedRuleSetFailure';
  constructor() {
    super('Unexpected RuleSet failure');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, UnexpectedRuleSetFailureError);
    }
  }
}

createErrorFromCodeLookup.set(0x16, () => new UnexpectedRuleSetFailureError());
createErrorFromNameLookup.set(
  'UnexpectedRuleSetFailure',
  () => new UnexpectedRuleSetFailureError(),
);

/**
 * RuleSetRevisionNotAvailable: 'RuleSet revision not available'
 *
 * @category Errors
 * @category generated
 */
export class RuleSetRevisionNotAvailableError extends Error {
  readonly code: number = 0x17;
  readonly name: string = 'RuleSetRevisionNotAvailable';
  constructor() {
    super('RuleSet revision not available');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, RuleSetRevisionNotAvailableError);
    }
  }
}

createErrorFromCodeLookup.set(0x17, () => new RuleSetRevisionNotAvailableError());
createErrorFromNameLookup.set(
  'RuleSetRevisionNotAvailable',
  () => new RuleSetRevisionNotAvailableError(),
);

/**
 * AdditionalSignerCheckFailed: 'Additional Signer check failed'
 *
 * @category Errors
 * @category generated
 */
export class AdditionalSignerCheckFailedError extends Error {
  readonly code: number = 0x18;
  readonly name: string = 'AdditionalSignerCheckFailed';
  constructor() {
    super('Additional Signer check failed');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, AdditionalSignerCheckFailedError);
    }
  }
}

createErrorFromCodeLookup.set(0x18, () => new AdditionalSignerCheckFailedError());
createErrorFromNameLookup.set(
  'AdditionalSignerCheckFailed',
  () => new AdditionalSignerCheckFailedError(),
);

/**
 * PubkeyMatchCheckFailed: 'Pubkey Match check failed'
 *
 * @category Errors
 * @category generated
 */
export class PubkeyMatchCheckFailedError extends Error {
  readonly code: number = 0x19;
  readonly name: string = 'PubkeyMatchCheckFailed';
  constructor() {
    super('Pubkey Match check failed');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, PubkeyMatchCheckFailedError);
    }
  }
}

createErrorFromCodeLookup.set(0x19, () => new PubkeyMatchCheckFailedError());
createErrorFromNameLookup.set('PubkeyMatchCheckFailed', () => new PubkeyMatchCheckFailedError());

/**
 * PubkeyListMatchCheckFailed: 'Pubkey List Match check failed'
 *
 * @category Errors
 * @category generated
 */
export class PubkeyListMatchCheckFailedError extends Error {
  readonly code: number = 0x1a;
  readonly name: string = 'PubkeyListMatchCheckFailed';
  constructor() {
    super('Pubkey List Match check failed');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, PubkeyListMatchCheckFailedError);
    }
  }
}

createErrorFromCodeLookup.set(0x1a, () => new PubkeyListMatchCheckFailedError());
createErrorFromNameLookup.set(
  'PubkeyListMatchCheckFailed',
  () => new PubkeyListMatchCheckFailedError(),
);

/**
 * PubkeyTreeMatchCheckFailed: 'Pubkey Tree Match check failed'
 *
 * @category Errors
 * @category generated
 */
export class PubkeyTreeMatchCheckFailedError extends Error {
  readonly code: number = 0x1b;
  readonly name: string = 'PubkeyTreeMatchCheckFailed';
  constructor() {
    super('Pubkey Tree Match check failed');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, PubkeyTreeMatchCheckFailedError);
    }
  }
}

createErrorFromCodeLookup.set(0x1b, () => new PubkeyTreeMatchCheckFailedError());
createErrorFromNameLookup.set(
  'PubkeyTreeMatchCheckFailed',
  () => new PubkeyTreeMatchCheckFailedError(),
);

/**
 * PDAMatchCheckFailed: 'PDA Match check failed'
 *
 * @category Errors
 * @category generated
 */
export class PDAMatchCheckFailedError extends Error {
  readonly code: number = 0x1c;
  readonly name: string = 'PDAMatchCheckFailed';
  constructor() {
    super('PDA Match check failed');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, PDAMatchCheckFailedError);
    }
  }
}

createErrorFromCodeLookup.set(0x1c, () => new PDAMatchCheckFailedError());
createErrorFromNameLookup.set('PDAMatchCheckFailed', () => new PDAMatchCheckFailedError());

/**
 * ProgramOwnedCheckFailed: 'Program Owned check failed'
 *
 * @category Errors
 * @category generated
 */
export class ProgramOwnedCheckFailedError extends Error {
  readonly code: number = 0x1d;
  readonly name: string = 'ProgramOwnedCheckFailed';
  constructor() {
    super('Program Owned check failed');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, ProgramOwnedCheckFailedError);
    }
  }
}

createErrorFromCodeLookup.set(0x1d, () => new ProgramOwnedCheckFailedError());
createErrorFromNameLookup.set('ProgramOwnedCheckFailed', () => new ProgramOwnedCheckFailedError());

/**
 * ProgramOwnedListCheckFailed: 'Program Owned List check failed'
 *
 * @category Errors
 * @category generated
 */
export class ProgramOwnedListCheckFailedError extends Error {
  readonly code: number = 0x1e;
  readonly name: string = 'ProgramOwnedListCheckFailed';
  constructor() {
    super('Program Owned List check failed');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, ProgramOwnedListCheckFailedError);
    }
  }
}

createErrorFromCodeLookup.set(0x1e, () => new ProgramOwnedListCheckFailedError());
createErrorFromNameLookup.set(
  'ProgramOwnedListCheckFailed',
  () => new ProgramOwnedListCheckFailedError(),
);

/**
 * ProgramOwnedTreeCheckFailed: 'Program Owned Tree check failed'
 *
 * @category Errors
 * @category generated
 */
export class ProgramOwnedTreeCheckFailedError extends Error {
  readonly code: number = 0x1f;
  readonly name: string = 'ProgramOwnedTreeCheckFailed';
  constructor() {
    super('Program Owned Tree check failed');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, ProgramOwnedTreeCheckFailedError);
    }
  }
}

createErrorFromCodeLookup.set(0x1f, () => new ProgramOwnedTreeCheckFailedError());
createErrorFromNameLookup.set(
  'ProgramOwnedTreeCheckFailed',
  () => new ProgramOwnedTreeCheckFailedError(),
);

/**
 * AmountCheckFailed: 'Amount checked failed'
 *
 * @category Errors
 * @category generated
 */
export class AmountCheckFailedError extends Error {
  readonly code: number = 0x20;
  readonly name: string = 'AmountCheckFailed';
  constructor() {
    super('Amount checked failed');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, AmountCheckFailedError);
    }
  }
}

createErrorFromCodeLookup.set(0x20, () => new AmountCheckFailedError());
createErrorFromNameLookup.set('AmountCheckFailed', () => new AmountCheckFailedError());

/**
 * FrequencyCheckFailed: 'Frequency check failed'
 *
 * @category Errors
 * @category generated
 */
export class FrequencyCheckFailedError extends Error {
  readonly code: number = 0x21;
  readonly name: string = 'FrequencyCheckFailed';
  constructor() {
    super('Frequency check failed');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, FrequencyCheckFailedError);
    }
  }
}

createErrorFromCodeLookup.set(0x21, () => new FrequencyCheckFailedError());
createErrorFromNameLookup.set('FrequencyCheckFailed', () => new FrequencyCheckFailedError());

/**
 * IsWalletCheckFailed: 'IsWallet check failed'
 *
 * @category Errors
 * @category generated
 */
export class IsWalletCheckFailedError extends Error {
  readonly code: number = 0x22;
  readonly name: string = 'IsWalletCheckFailed';
  constructor() {
    super('IsWallet check failed');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, IsWalletCheckFailedError);
    }
  }
}

createErrorFromCodeLookup.set(0x22, () => new IsWalletCheckFailedError());
createErrorFromNameLookup.set('IsWalletCheckFailed', () => new IsWalletCheckFailedError());

/**
 * Attempts to resolve a custom program error from the provided error code.
 * @category Errors
 * @category generated
 */
export function errorFromCode(code: number): MaybeErrorWithCode {
  const createError = createErrorFromCodeLookup.get(code);
  return createError != null ? createError() : null;
}

/**
 * Attempts to resolve a custom program error from the provided error name, i.e. 'Unauthorized'.
 * @category Errors
 * @category generated
 */
export function errorFromName(name: string): MaybeErrorWithCode {
  const createError = createErrorFromNameLookup.get(name);
  return createError != null ? createError() : null;
}
