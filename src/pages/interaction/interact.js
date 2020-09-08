import React, { useState } from 'react';
import Layout from 'src/components/Layout/layout';
import BackLink from 'src/components/BackLink';
import {  Container } from 'src/PagesStyle/OverviewPage/styled';
import Footer from 'src/components/Footer';
import SEO from 'src/components/Seo';
import {TezosNodeWriter, TezosParameterFormat, KeyStoreType, TezosMessageUtils} from "conseiljs";
import { SoftSigner } from 'conseiljs-softsigner';

function Interact() {
  
  const [newName, setNewName] = useState('');
  const [newCoordinate,setNewCoordinate ] = useState('');
  const [alienType,setAlienType] = useState('simple_alien');
  const [displayMessage,setDisplayMessage] = useState('Execute an operation by entering the required value and clicking a button!');
  var key= {
    publicKey: "edpkuZHZjYFPFR713NsH41i946z8PiZ4Ho7F4KbvdMiNgKA7XHrqKL",
    privateKey:
      "edskRevMtNnc1W5jkPAKJDhC2oipaYuogxR3fZrsXhtZUsQrjibcU4WpnuS6WinNZ4WT8zNPpeSJHuUoEB83wwwuk9fkPv8z65",
    publicKeyHash: "tz1NN5QooJWkW44KFfrXqLRaxEa5Wxw3f9FF",
    seed: "",
    storeType: KeyStoreType.Fundraiser
  };
  var tezosNode= "https://testnet.tezster.tech";
  var contractAddress= "KT1RbBXxhMyNY41XNygkYcBS5FC5MAnfYfpb";
  var executeOperation = async (operationName,parameters) =>
  {
    setDisplayMessage(`Executing ${operationName}....`);
    const signer = await SoftSigner.createSigner(TezosMessageUtils.writeKeyWithHint(key.privateKey, 'edsk'));
    const result= await TezosNodeWriter.sendContractInvocationOperation(
      tezosNode,
      signer,
      key,
      contractAddress,
      0,
      100000,
      1000,
      750000,
      undefined,
      parameters
      ,TezosParameterFormat.Michelson);
    setDisplayMessage(`${operationName} successful! Ready for next operation.`);
  }

  return (
    <Layout
      background={`radial-gradient(
        144.9% 144.89% at 53.86% -49.56%,
        #09272E 43.89%,
        #1F476B 100%
      )
      no-repeat center center fixed`}
    >
      <SEO title="Interact with deployed smart contract" />
      <Container>
      <div>
          <BackLink to="/tezos" />
        </div>
      <div style={{
        textAlign: "center",
        border: "3px solid black",
        padding: "10px",
        background: "white"
      }}>
        <h1>INTERACT WITH DEPLOYED SMART CONTRACT</h1>
        <p>{displayMessage}</p>
        <br/>
        <div >
          <input
            value={newName}
            onChange={e => setNewName(e.target.value|| '')}
            placeholder="New name"
            type="text"
            name="newName"
          />
          <button onClick={()=> { if(newName) 
                                  {
                                      executeOperation("Change Name",`(Left (Left "${newName}"))`);
                                      setNewName('');
                                  }
                                  else 
                                    setDisplayMessage('Please enter a new name first!');
        }}>Change Name</button>
        <br/>
        <br/>
          <button onClick={()=> { if(newCoordinate) 
                                  {
                                      executeOperation("Move Vertically",`(Right (Left ${newCoordinate}))`);
                                      setNewCoordinate('');
                                  }
                                  else 
                                    setDisplayMessage('Please enter a coordinate first!');
        }}>Move Vertically</button>
          <input
            value={newCoordinate}
            onChange={e => setNewCoordinate(e.target.value|| '')}
            placeholder="New Coordinate"
            type="number"
            name="newCoordinate"
          />
          <button onClick={()=> { if(newCoordinate) 
                                  {
                                    executeOperation("Move Horizontally",`(Left (Right ${newCoordinate}))`);
                                    setNewCoordinate('');
                                  }
                                  else 
                                    setDisplayMessage('Please enter a coordinate first!');
        }}>Move Horizontally</button>
        <br/>
        <br/>
          <label>
            <input
              type="radio"
              value="simple_alien"
              checked={alienType === "simple_alien"}
              onChange={e => setAlienType(e.target.value)}
            />
            Simple Alien
          </label>
          <br/>
          <label>
            <input
              type="radio"
              value="boss_alien"
              checked={alienType === "boss_alien"}
              onChange={e => setAlienType(e.target.value)}
            />
            Boss Alien
          </label>
          <br/>
          <button onClick={()=> { if(alienType) 
                                  {
                                      executeOperation("Shoot Alien",`(Right (Right "${alienType}"))`);
                                      setAlienType();
                                  }
                                  else 
                                    setDisplayMessage('Please choose an alien type first!');
        }}>Shoot Alien</button>
        </div>
      </div>
      </Container>
      <Footer />
    </Layout>
    );
}

export default Interact;