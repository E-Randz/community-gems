
import Firebase from 'firebase';
import config from './config'

let app = Firebase.initializeApp(config);
export const db = app.database();