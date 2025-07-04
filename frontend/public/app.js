const form = document.getElementById('appointmentForm');
const list = document.getElementById('appointments');

async function load() {
  const res = await fetch('/api/appointments');
  const data = await res.json();
  list.innerHTML = data.map(a => `<li>#${a.id} - ${a.desc}</li>`).join('');
}

form.addEventListener('submit', async e => {
  e.preventDefault();
  const desc = document.getElementById('desc').value;
  await fetch('/api/appointments', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({desc})
  });
  form.reset();
  load();
});

load();
