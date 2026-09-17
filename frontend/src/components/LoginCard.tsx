import { useEffect, useState } from "react";
import { login } from "../api.ts";

export default function LoginCard() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

        

    return (
        <form onSubmit={e => {
            e.preventDefault
        }}>
            <h1>התחבר</h1>
            <label >
                אימייל
                <input
                    type="text"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />
            </label>
            <label >
                סיסמה
                <input
                    type="password"
                    placeholder="••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required />
            </label>
            <button type="submit">התחבר</button>
        </form>
    );
}
