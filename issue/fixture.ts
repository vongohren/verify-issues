export const signableSimpleTemplate = {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://w3id.org/traceability/v1",
    ],
    type: [
      "VerifiableCredential",
    ],
    issuer: "did:key:z6Mkiy4qDuyvcVDHG7zcfEDjmmLchAuk8hy4uAJrQht3wio3",
    issuanceDate: "2022-04-18T13:30:30Z",
    credentialSubject: {
      type: "ContactPoint",
      id: "did:key:z6MkfwmZep5ZvkHfeXszxhxEuvkmGFRc8H9Nv9ZaQG4vhFzZ",
      phoneNumber: "+46456812311",
      identifier: "7870dab0-f8f5-11eb-b356-657b2e987fed",
    },
  }

  export const signableComplexTemplate = {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://credreg.net/ctdlasn/schema/context/json",
    ],
    type: [
      "VerifiableCredential",
    ],
    issuer: "did:key:z6Mkiy4qDuyvcVDHG7zcfEDjmmLchAuk8hy4uAJrQht3wio3",
    issuanceDate: "2022-04-18T13:55:26Z",
    credentialSubject: {
      id: "did:key:z6MkfwmZep5ZvkHfeXszxhxEuvkmGFRc8H9Nv9ZaQG4vhFzZ",
      "schema:hasCredential": {
        type: "ceterms:MicroCredential",
        "ceterms:name": "Ogi ogi",
        "ceterms:description": "This is a proof that things work!",
        "ceterms:relatedAction": {
          type: "ceterms:CredentialingAction",
          "ceterms:startDate": "2022-04-18T11:55:10.968Z",
          "ceterms:endDate": "2022-04-20T11:55:10.968Z",
        },
        "ceterms:subject": [
          {
            type: "ceterms:CredentialAlignmentObject",
            "ceterms:targetNodeName": {
              "en-US": "Making sure you know Javascript",
            },
          },
        ],
      },
    }
  }

  export const jwkKeyTest = {
    id: "did:key:z6Mkiy4qDuyvcVDHG7zcfEDjmmLchAuk8hy4uAJrQht3wio3#z6Mkiy4qDuyvcVDHG7zcfEDjmmLchAuk8hy4uAJrQht3wio3",
    type: "JsonWebKey2020",
    controller: "did:key:z6Mkiy4qDuyvcVDHG7zcfEDjmmLchAuk8hy4uAJrQht3wio3",
    publicKeyJwk: {
      kty: "OKP",
      crv: "Ed25519",
      x: "QxF-PbbB8Y8DG4zjNUZ2BDep9I6c6tByNNz5mH_pvSI",
    },
    privateKeyJwk: {
      kty: "OKP",
      crv: "Ed25519",
      x: "QxF-PbbB8Y8DG4zjNUZ2BDep9I6c6tByNNz5mH_pvSI",
      d: "WjNFyrdIoGZBQPpSoKmbOkWBxmJx29ZdxcNi5m_euw8",
    },
  }

  export const jwkKeyTest2 = {
    id: 'did:key:z6MkrCuzC7N4D3JfvALudSX6rBScpP18QCyaG75nHkoC5JnH#z6MkrCuzC7N4D3JfvALudSX6rBScpP18QCyaG75nHkoC5JnH',
    type: 'JsonWebKey2020',
    controller: 'did:key:z6MkrCuzC7N4D3JfvALudSX6rBScpP18QCyaG75nHkoC5JnH',
    publicKeyJwk: {
      kty: 'OKP',
      crv: 'Ed25519',
      x: 'rp9uc-Yzng-TfFgIS4JyQbahsfuAgsWq01KpW3KdrnY'
    },
    privateKeyJwk: {
      kty: 'OKP',
      crv: 'Ed25519',
      x: 'rp9uc-Yzng-TfFgIS4JyQbahsfuAgsWq01KpW3KdrnY',
      d: 'KYIv8IU-VsBbnkgypAbSfyDrFtLQ_OdK6k8qSGWpLz4'
    }
  }

  export const jwkKeyTest3 = {
    id: 'did:key:z6Mkr72buvcYLjmf3ncsSyrbpvf1gmyYd5Y2xYKfJapwEYsk#z6Mkr72buvcYLjmf3ncsSyrbpvf1gmyYd5Y2xYKfJapwEYsk',
    type: 'JsonWebKey2020',
    controller: 'did:key:z6Mkr72buvcYLjmf3ncsSyrbpvf1gmyYd5Y2xYKfJapwEYsk',
    publicKeyJwk: {
      kty: 'OKP',
      crv: 'Ed25519',
      x: 'rR1tXOm9ZzRgO3714o3pgqMIRcbX8izcodW0sdgkT2M'
    },
    privateKeyJwk: {
      kty: 'OKP',
      crv: 'Ed25519',
      x: 'rR1tXOm9ZzRgO3714o3pgqMIRcbX8izcodW0sdgkT2M',
      d: 'wvCkS887uUG1QdeMDu6kjM4eG4zv54FEMhpm8eXPoLo'
    }
  }