import "./styles.css";
import { useState } from "react";
const data = {
  Home: {
    "Electric Vehicle": [
      {
        battery: {
          lithiomIon: true,
          "2Din": true,
          Electrode: {
            common: true,
            Night: false,
            Afternoon: true
          }
        }
      },
      {
        Switch: {
          startStop: true,
          "Round light": true,
          Mirror: {
            sideMirror: true,
            WindowMirror: true
          }
        }
      }
    ],
    "Disel Vehicle": [
      {
        battery: {
          lithiomIon: true,
          "2Din": true,
          Electrode: {
            common: true,
            Night: false,
            Afternoon: true
          }
        }
      },
      {
        Switch: {
          startStop: true,
          "Round light": true,
          Mirror: {
            sideMirror: true,
            WindowMirror: true
          }
        }
      },
      {
        "AC belt": {
          Minor: true,
          Major: true
        }
      }
    ]
  },
  Details: {
    "Electric Vehicle": [
      {
        battery: {
          lithiomIon: true,
          "2Din": true,
          Electrode: {
            common: true,
            Night: false,
            Afternoon: true
          }
        }
      },
      {
        Switch: {
          startStop: true,
          "Round light": true,
          Mirror: {
            sideMirror: true,
            WindowMirror: true
          }
        }
      }
    ],
    "Disel Vehicle": [
      {
        battery: {
          lithiomIon: true,
          "2Din": true,
          Electrode: {
            common: true,
            Night: false,
            Afternoon: true
          }
        }
      },
      {
        Switch: {
          startStop: true,
          "Round light": true,
          Mirror: {
            sideMirror: true,
            WindowMirror: true
          }
        }
      },
      {
        "AC belt": {
          Minor: true,
          Major: true
        }
      }
    ]
  }
};

export default function App() {
  const [selected, setSelected] = useState({});
  return (
    <div className="App">
      <SubTree
        data={data}
        selected={selected}
        handleClick={(selected) => {
          setSelected({ ...selected });
        }}
      ></SubTree>
    </div>
  );
}

function SubTree({ data, parent }) {
  return (
    <>
      {Object.keys(data).map((key) => {
        return (
          <>
            {typeof data[key] === "object" && data.constructor === Object ? (
              <details style={{ marginLeft: 30 }}>
                <summary>{key}</summary>
                <SubTree data={data[key]}></SubTree>
              </details>
            ) : Array.isArray(data) ? (
              Object.keys(data[key]).map((value) => (
                <details style={{ marginLeft: 30 }}>
                  <summary>{value}</summary>
                  <SubTree data={data[key][value]}></SubTree>
                </details>
              ))
            ) : (
              data[key] && <div style={{ marginLeft: 45 }}>{key}</div>
            )}
          </>
        );
      })}
    </>
  );
}
