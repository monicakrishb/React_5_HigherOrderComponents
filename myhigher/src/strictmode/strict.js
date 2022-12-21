import React from 'react'

export default function strict() {
  return (
    <div>
        <header/>
        <React.StrictMode>
        <div>
<ComponentOne/>
<ComponentTwo/>
        </div>
        </React.StrictMode>
        <footer/>
    </div>
  );
}
