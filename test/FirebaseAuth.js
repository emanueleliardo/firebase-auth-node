'use strict';

let serviceKey = require('../firebase-config/firebase.service-key.json');
let firebaseConfig = require('../firebase-config/firebase.config.json');
let FirebaseAuth = require('../index.js');
let assert = require('assert');

describe('test', () => {
	let firebaseAuth = new FirebaseAuth(firebaseConfig, serviceKey);

  it('signIn should return an object with idToken and uid', () => {
  	return firebaseAuth.signIn('test@test.test', 'testtest')
  		.then((res) => {
  			assert('object', typeof(res));
  		});
  });

  it('signIn should return a an object code and message', () => {
  	return firebaseAuth.signIn('fail', 'fail')
  		.catch((err) => {
  			assert('object', typeof(err));
  		});
  });

  it('authToken should return true if token is valid', () => {
    return firebaseAuth.signIn('test@test.test', 'testtest')
      .then((user) => {
        return firebaseAuth.authToken(user.idToken)
          .then(() => {
            return true;
          });
          return true;
      });
  })
  
});
