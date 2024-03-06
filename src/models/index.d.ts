import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerOwner = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Owner, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ownername: string;
  readonly address?: string | null;
  readonly Homes?: (OwnerHome | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOwner = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Owner, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ownername: string;
  readonly address?: string | null;
  readonly Homes: AsyncCollection<OwnerHome>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Owner = LazyLoading extends LazyLoadingDisabled ? EagerOwner : LazyOwner

export declare const Owner: (new (init: ModelInit<Owner>) => Owner) & {
  copyOf(source: Owner, mutator: (draft: MutableModel<Owner>) => MutableModel<Owner> | void): Owner;
}

type EagerHome = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Home, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly address?: string | null;
  readonly image_url?: string | null;
  readonly price?: number | null;
  readonly owners?: (OwnerHome | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHome = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Home, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly address?: string | null;
  readonly image_url?: string | null;
  readonly price?: number | null;
  readonly owners: AsyncCollection<OwnerHome>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Home = LazyLoading extends LazyLoadingDisabled ? EagerHome : LazyHome

export declare const Home: (new (init: ModelInit<Home>) => Home) & {
  copyOf(source: Home, mutator: (draft: MutableModel<Home>) => MutableModel<Home> | void): Home;
}

type EagerOwnerHome = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OwnerHome, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ownerId?: string | null;
  readonly homeId?: string | null;
  readonly owner: Owner;
  readonly home: Home;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOwnerHome = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OwnerHome, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ownerId?: string | null;
  readonly homeId?: string | null;
  readonly owner: AsyncItem<Owner>;
  readonly home: AsyncItem<Home>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type OwnerHome = LazyLoading extends LazyLoadingDisabled ? EagerOwnerHome : LazyOwnerHome

export declare const OwnerHome: (new (init: ModelInit<OwnerHome>) => OwnerHome) & {
  copyOf(source: OwnerHome, mutator: (draft: MutableModel<OwnerHome>) => MutableModel<OwnerHome> | void): OwnerHome;
}