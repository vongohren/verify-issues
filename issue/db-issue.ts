import vc from '@digitalbazaar/vc';
import { Ed25519Signature2018 } from '@digitalbazaar/ed25519-signature-2018';
import { Ed25519VerificationKey2018 } from
  '@digitalbazaar/ed25519-verification-key-2018';

import { docLoader as documentLoader } from './document';


export const digitalbazaar = async  (vcData, key) => {
    const jwk = await key.export({
        privateKey: true,
        type: 'Ed25519VerificationKey2018',
      });
    const verificationKey = await Ed25519VerificationKey2018.from(jwk);
    const suite = new Ed25519Signature2018({ key: verificationKey })

    const signedVC = await vc.issue({credential: vcData, suite, documentLoader});
    // console.log(JSON.stringify(signedVC, null, 2));

    console.log(JSON.stringify(signedVC));
}

export const digitalbazaarMultiIssue = async  (vcData, keys) => {
  const jwkPromises = keys.map(async key=> {
    const jwk = await key.export({
      privateKey: true,
      type: 'Ed25519VerificationKey2018',
    });
    return jwk
  })

  const jwks = await Promise.all(jwkPromises);

  let signed;

  const promises = jwks.map(async jwk => {
    const verificationKey = await Ed25519VerificationKey2018.from(jwk);
    const suite = new Ed25519Signature2018({ key: verificationKey })
    if(signed) {
      const signedVC = await vc.issue({credential: signed, suite, documentLoader});
      signed = signedVC
    } else {
      const signedVC = await vc.issue({credential: vcData, suite, documentLoader});
      signed = signedVC;
    }
  })

  await Promise.all(promises);



  
  // console.log(JSON.stringify(signedVC, null, 2));

  console.log(JSON.stringify(signed));
}
