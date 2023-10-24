import CryptoJS from 'crypto-js';

const encryptionKey = "Dummy";


export function encrypt  (data)  {
  const jsonString = JSON.stringify(data);
  const ciphertext = CryptoJS.AES.encrypt(jsonString, encryptionKey).toString();
  return ciphertext;
};


export function decrypt  (data)  {
  if (data == null) {
    return null;
  }
  const plaintext = CryptoJS.AES.decrypt(data, encryptionKey).toString(CryptoJS.enc.Utf8);  
  const nestedObject = JSON.parse(plaintext);
  return nestedObject;
};


