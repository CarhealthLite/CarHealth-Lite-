import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const navigate = useNavigate();
  const { isAuthenticated, token } = useAuth();
  const [form, setForm] = useState({
    marca: '',
    model: '',
    an: '',
    motorizare: '',
    codMotor: '',
    kilometraj: '',
    service: '',
    simptome: ''
  });

  const [diagnostic, setDiagnostic] = useState('');
  const [probabilitate, setProbabilitate] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) navigate('/login');
  }, [isAuthenticated, navigate]);

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleDiagnose = async () => {
    if (!form.marca || !form.model || !form.an || !form.motorizare || !form.kilometraj || !form.service || !form.simptome) {
      setDiagnostic('\u26A0\uFE0F Completeaz\u0103 toate c\u00E2mpurile obligatorii (Cod motor este op\u021Bional).');
      return;
    }

    setLoading(true);
    setDiagnostic('');
    setProbabilitate(null);

    try {
      const res = await axios.post('http://localhost:5000/api/diagnostic', form, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const text = res.data.result;
      const match = text.match(/(\d+)\s?%/);
      if (match) setProbabilitate(match[1]);

      setDiagnostic(text);
    } catch {
      setDiagnostic('\u274C Eroare la generarea diagnosticului.');
    }

    setLoading(false);
  };

  return (
    <div style={page}>
      <div className="page-logo-wrap">
        <img
          src="/CarHealth%20Lite.png"
          alt="CarHealth Lite"
          className="page-logo page-logo--dashboard"
        />
      </div>
      <h1 style={title}>{'\uD83D\uDE97 CarHealth Lite'}</h1>
      <p style={subtitle}>Diagnostic auto inteligent</p>

      <div style={grid}>
        <div style={card}>
          <h2>{'\uD83E\uDDFE Date vehicul'}</h2>

          {[
            ['marca', 'Marca'],
            ['model', 'Model'],
            ['an', 'An fabrica\u021Bie'],
            ['motorizare', 'Motorizare (ex: 1.5 dCi)'],
            ['codMotor', 'Cod motor*'],
            ['kilometraj', 'Kilometraj'],
            ['service', 'Informa\u021Bii despre ultimele service-uri'],
            ['simptome', 'Simptome']
          ].map(([name, label]) => (
            <input key={name} name={name} placeholder={label} value={form[name]} onChange={handleChange} style={input} />
          ))}

          <button onClick={handleDiagnose} style={button} disabled={loading}>
            {loading ? '\u23F3 Diagnosticare, a\u0219teapt\u0103 c\u00E2teva secunde...' : '\uD83D\uDD0D Diagnosticare'}
          </button>
        </div>

        <div style={card}>
          <h2>{'\uD83E\uDD16 Diagnostic AI'}</h2>

          {probabilitate && (
            <div style={circleWrapper}>
              <svg width="140" height="140">
                <circle cx="70" cy="70" r="60" stroke="#e6e6e6" strokeWidth="10" fill="none" />
                <circle
                  cx="70"
                  cy="70"
                  r="60"
                  stroke="#0d6efd"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray={`${probabilitate * 3.77} 377`}
                  transform="rotate(-90 70 70)"
                />
              </svg>
              <div style={circleText}>{probabilitate}%</div>
            </div>
          )}

          {diagnostic && (
            <div style={aiBox} dangerouslySetInnerHTML={{ __html: diagnostic }} />
          )}
        </div>
      </div>
    </div>
  );
};

const page = { background: '#f4f6fb', minHeight: '100vh', padding: '3rem', fontFamily: 'Inter, system-ui' };
const title = { textAlign: 'center', fontSize: '2.8rem' };
const subtitle = { textAlign: 'center', fontSize: '1.2rem', color: '#555' };
const grid = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', marginTop: '3rem' };
const card = { background: '#fff', padding: '2.5rem', borderRadius: '16px', boxShadow: '0 15px 30px rgba(0,0,0,0.06)' };
const input = { width: '100%', padding: '0.9rem', fontSize: '1.05rem', marginTop: '0.8rem', borderRadius: '8px', border: '1px solid #ccc' };
const button = { marginTop: '1.8rem', width: '100%', padding: '1rem', fontSize: '1.1rem', background: '#0d6efd', color: '#fff', border: 'none', borderRadius: '10px', cursor: 'pointer' };
const circleWrapper = { position: 'relative', width: '140px', margin: '1.5rem auto' };
const circleText = { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '1.8rem', fontWeight: 'bold', color: '#0d6efd' };
const aiBox = { marginTop: '1.5rem', lineHeight: '1.7', fontSize: '1.05rem', whiteSpace: 'pre-wrap' };

export default Dashboard;
