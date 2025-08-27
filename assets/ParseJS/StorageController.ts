import RNStorageController from './StorageController.react-native';
import BrowserStorageController from './StorageController.browser';
import WeappStorageController from './StorageController.weapp';
import DefaultStorageController from './StorageController.default';

let StorageController: any = DefaultStorageController;

export default StorageController;
