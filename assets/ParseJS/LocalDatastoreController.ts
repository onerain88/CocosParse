import RNLocalDatastoreController from './LocalDatastoreController.react-native';
import DefaultLocalDatastoreController from './LocalDatastoreController.default';

let LocalDatastoreController: any = DefaultLocalDatastoreController;

LocalDatastoreController = RNLocalDatastoreController;

export default LocalDatastoreController;
