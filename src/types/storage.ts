import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v9370 from './v9370'
import * as v9380 from './v9380'
import * as v9400 from './v9400'

export class NftsCollectionStorage extends StorageBase {
    protected getPrefix() {
        return 'Nfts'
    }

    protected getName() {
        return 'Collection'
    }

    /**
     *  Details of a collection.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === '9ce13dd18343df200125acc03c762c3bde486075c6c3abc3cfebf32c43e4ef8d'
    }

    /**
     *  Details of a collection.
     */
    get asV9370(): NftsCollectionStorageV9370 {
        assert(this.isV9370)
        return this as any
    }

    /**
     *  Details of a collection.
     */
    get isV9400(): boolean {
        return this.getTypeHash() === '2048922b0682bb5b7de7ca9a7e01264f12386f5c3cad9a3e84b1e5a81cd69913'
    }

    /**
     *  Details of a collection.
     */
    get asV9400(): NftsCollectionStorageV9400 {
        assert(this.isV9400)
        return this as any
    }
}

/**
 *  Details of a collection.
 */
export interface NftsCollectionStorageV9370 {
    get(key: number): Promise<(v9370.Type_319 | undefined)>
    getAll(): Promise<v9370.Type_319[]>
    getMany(keys: number[]): Promise<(v9370.Type_319 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9370.Type_319][]>
    getPairs(key: number): Promise<[k: number, v: v9370.Type_319][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9370.Type_319][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9370.Type_319][]>
}

/**
 *  Details of a collection.
 */
export interface NftsCollectionStorageV9400 {
    get(key: number): Promise<(v9400.Type_342 | undefined)>
    getAll(): Promise<v9400.Type_342[]>
    getMany(keys: number[]): Promise<(v9400.Type_342 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9400.Type_342][]>
    getPairs(key: number): Promise<[k: number, v: v9400.Type_342][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9400.Type_342][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9400.Type_342][]>
}

export class NftsItemMetadataOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Nfts'
    }

    protected getName() {
        return 'ItemMetadataOf'
    }

    /**
     *  Metadata of an item.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === 'b47d99c2f26602ad6e2ad432d3f9d48dfa5a05b64b0b6518f1c74bf9a0372f12'
    }

    /**
     *  Metadata of an item.
     */
    get asV9370(): NftsItemMetadataOfStorageV9370 {
        assert(this.isV9370)
        return this as any
    }

    /**
     *  Metadata of an item.
     */
    get isV9380(): boolean {
        return this.getTypeHash() === 'a2ef643060836070ede73871794a2c9da331285c79b5e9e6f9935723f37af9c6'
    }

    /**
     *  Metadata of an item.
     */
    get asV9380(): NftsItemMetadataOfStorageV9380 {
        assert(this.isV9380)
        return this as any
    }
}

/**
 *  Metadata of an item.
 */
export interface NftsItemMetadataOfStorageV9370 {
    get(key1: number, key2: number): Promise<(v9370.Type_329 | undefined)>
    getAll(): Promise<v9370.Type_329[]>
    getMany(keys: [number, number][]): Promise<(v9370.Type_329 | undefined)[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: v9370.Type_329][]>
    getPairs(key1: number): Promise<[k: [number, number], v: v9370.Type_329][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: v9370.Type_329][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: v9370.Type_329][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: v9370.Type_329][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: v9370.Type_329][]>
}

/**
 *  Metadata of an item.
 */
export interface NftsItemMetadataOfStorageV9380 {
    get(key1: number, key2: number): Promise<(v9380.Type_339 | undefined)>
    getAll(): Promise<v9380.Type_339[]>
    getMany(keys: [number, number][]): Promise<(v9380.Type_339 | undefined)[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: v9380.Type_339][]>
    getPairs(key1: number): Promise<[k: [number, number], v: v9380.Type_339][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: v9380.Type_339][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: v9380.Type_339][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: v9380.Type_339][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: v9380.Type_339][]>
}
