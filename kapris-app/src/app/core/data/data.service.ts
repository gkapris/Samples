import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfo,
  STATUS,
} from 'angular-in-memory-web-api';
import { LocalStorageService } from '../local-storage/local-storage.service';

function guid(): any {
  function s4(): any {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString()
      .substring(1);
  }
  return (
    s4() +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    s4() +
    s4()
  );
}

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  constructor(private localStorageService: LocalStorageService) {}

  createDb(): any {
    if (!this.localStorageService.get('info')) {
      this.localStorageService.set('heroes', []);
    }
    return {};
  }

  get(reqInfo: RequestInfo): any {
    const collection = this.localStorageService.get(
      reqInfo.collectionName
    ) as any[];
    const result = reqInfo.id
      ? reqInfo.utils.findById(collection, reqInfo.id)
      : collection;

    return reqInfo.utils.createResponse$(() => {
      return {
        body: result,
        status: STATUS.OK,
      };
    });
  }

  post(reqInfo: RequestInfo): any {
    const item = reqInfo.utils.getJsonBody(reqInfo.req);
    item.id = guid();

    const collection = this.localStorageService.get(
      reqInfo.collectionName
    ) as any[];

    this.localStorageService.set(reqInfo.collectionName, [...collection, item]);

    return reqInfo.utils.createResponse$(() => {
      return { status: STATUS.OK };
    });
  }

  put(reqInfo: RequestInfo): any {
    const collection = this.localStorageService.get(
      reqInfo.collectionName
    ) as any[];
    const index = collection.findIndex((item) => item.id === reqInfo.id);

    collection[index] = reqInfo.utils.getJsonBody(reqInfo.req);

    this.localStorageService.set(reqInfo.collectionName, collection);

    return reqInfo.utils.createResponse$(() => {
      return { status: STATUS.OK };
    });
  }

  delete(reqInfo: RequestInfo): any {
    const collection = this.localStorageService.get(
      reqInfo.collectionName
    ) as any[];

    this.localStorageService.set(
      reqInfo.collectionName,
      collection.filter((item) => item.id !== reqInfo.id)
    );
    return reqInfo.utils.createResponse$(() => {
      return { status: STATUS.OK };
    });
  }
}
