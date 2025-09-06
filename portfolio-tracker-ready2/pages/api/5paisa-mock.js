export default function handler(req,res){ if(req.method==='POST') return res.status(200).json({token:'mock-5paisa'}); res.status(405).end(); }
