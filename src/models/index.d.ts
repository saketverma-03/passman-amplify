import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerPasswords = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Passwords, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly password: string;
  readonly website?: string | null;
  readonly userId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPasswords = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Passwords, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly password: string;
  readonly website?: string | null;
  readonly userId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Passwords = LazyLoading extends LazyLoadingDisabled ? EagerPasswords : LazyPasswords

export declare const Passwords: (new (init: ModelInit<Passwords>) => Passwords) & {
  copyOf(source: Passwords, mutator: (draft: MutableModel<Passwords>) => MutableModel<Passwords> | void): Passwords;
}