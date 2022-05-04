import * as ed25519 from "@transmute/did-key-ed25519";
import {
  Ed25519VerificationKey2018
} from '@digitalbazaar/ed25519-verification-key-2018';
import axios from 'axios';
import * as didKey from '@digitalbazaar/did-method-key';
const didKeyDriver = didKey.driver({verificationSuite: Ed25519VerificationKey2018});

import creg from './contexts/creg.json';
import w3cv1 from './contexts/w3credentialsv1.json';

const contexts = {
  "https://credreg.net/ctdlasn/schema/context/json": creg,
  "https://www.w3.org/2018/credentials/v1": w3cv1
}

const documents = {}

const DOCUMENT_LOADER_TYPE = "resolver"

type versions = 'digitalbazaar' | 'transmute'


export class DocumentLoader {
  type: versions
  constructor(type: versions) {
    this.type = type
  }

  documentLoader = async (iri: string) => {
    if (iri) {
      if (contexts[iri]) {
        return { document: contexts[iri] };
      }
  
      if (documents[iri]) {
        return { document: documents[iri] };
      }
  
      if (iri.startsWith("did:key:z6M")) {
        if(this.type === 'transmute') {
          const justDid = iri.split('#')[0]
          const { didDocument }: any = await ed25519.resolve(justDid);
          return { document: didDocument };
        } else {
          const didDocument = await didKeyDriver.get({did: iri})
          return { document: didDocument}

        }
      }
  
      if (iri.startsWith("http")) {
        const resp = await axios({
          method: "get",
          url: iri,
          headers: {
            // Authorization: `Bearer ${token}`,
            accept: "application/json",
          },
        });
        console.log(`Hitting document request for this url: ${iri}`, { iri }, 'WARNING');
        return { document: resp.data};
      }
    } else {
      console.log(iri);
    }
  }  
}

