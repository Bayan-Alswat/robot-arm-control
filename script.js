document.addEventListener('DOMContentLoaded', () => {
const motorSliders = document.querySelectorAll('.motor-group input[type="range"]');
const motorValues = document.querySelectorAll('.motor-group span');
const resetButton = document.getElementById('reset-btn');
const savePoseButton = document.getElementById('save-pose-btn');
const runButton = document.getElementById('run-btn');
const posesTableBody = document.querySelector('#poses-table tbody');

motorSliders.forEach((slider, index) => {
slider.addEventListener('input', () => {
motorValues[index].textContent = slider.value;
});
});

resetButton.addEventListener('click', () => {
motorSliders.forEach((slider, index) => {
slider.value = 90; 
motorValues[index].textContent = 90;
});
});

const fetchAndDisplayPoses = async () => {
try {
const response = await fetch('get_poses.php');
const poses = await response.json();
posesTableBody.innerHTML = ''; 

poses.forEach((pose, index) => {
const row = posesTableBody.insertRow();
row.insertCell().textContent = index + 1; 
row.insertCell().textContent = pose.motor1;
row.insertCell().textContent = pose.motor2;
row.insertCell().textContent = pose.motor3;
row.insertCell().textContent = pose.motor4;
row.insertCell().textContent = pose.motor5;
row.insertCell().textContent = pose.motor6;

const actionCell = row.insertCell();
actionCell.classList.add('action-buttons');

const loadBtn = document.createElement('button');
loadBtn.textContent = 'Load';
loadBtn.classList.add('load-btn');
loadBtn.addEventListener('click', () => loadPose(pose));

const removeBtn = document.createElement('button');
removeBtn.textContent ='Remove';
removeBtn.classList.add('remove-btn');
removeBtn.addEventListener('click', () => removePose(pose.id));

actionCell.appendChild(loadBtn);
actionCell.appendChild(removeBtn);
});
} catch (error) {
console.error('Error:', error);
}
};

const loadPose = (pose) => {
document.getElementById('motor1').value = pose.motor1;
document.getElementById('motor1-val').textContent = pose.motor1;
document.getElementById('motor2').value = pose.motor2;
document.getElementById('motor2-val').textContent = pose.motor2;
document.getElementById('motor3').value = pose.motor3;
document.getElementById('motor3-val').textContent = pose.motor3;
document.getElementById('motor4').value = pose.motor4;
document.getElementById('motor4-val').textContent = pose.motor4;
document.getElementById('motor5').value = pose.motor5;
document.getElementById('motor5-val').textContent = pose.motor5;
document.getElementById('motor6').value = pose.motor6;
document.getElementById('motor6-val').textContent = pose.motor6;
};

savePoseButton.addEventListener('click', async () => {
const motorValuesData = {
motor1: document.getElementById('motor1').value,
motor2: document.getElementById('motor2').value,
motor3: document.getElementById('motor3').value,
motor4: document.getElementById('motor4').value,
motor5: document.getElementById('motor5').value,
motor6: document.getElementById('motor6').value,
status: 0 
};


try {
const response = await fetch('save_pose.php', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(motorValuesData)
});
const result = await response.json();
if (result.success) {
alert('successful!');
fetchAndDisplayPoses(); 
} else {
alert('error: ' + result.message);
}
} catch (error) {
console.error('error:', error);
alert('error.');
}
});

runButton.addEventListener('click', async () => {

const motorValuesData = {
motor1: document.getElementById('motor1').value,
motor2: document.getElementById('motor2').value,
motor3: document.getElementById('motor3').value,
motor4: document.getElementById('motor4').value,
motor5: document.getElementById('motor5').value,
motor6: document.getElementById('motor6').value,
status: 1 
};

try {
const response = await fetch('save_pose.php', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(motorValuesData)
});
const result = await response.json();
if (result.success) {
alert('successful');
fetchAndDisplayPoses(); 
} else {
alert('error: ' + result.message);
}

} catch (error) {
console.error('error:', error);
alert('error.');
}
});

const removePose = async (poseId) => {
if (!confirm('Are you sure?')) {
return;
}
try {
const response = await fetch('remove_pose.php', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({ id: poseId })
});
const result = await response.json();
if (result.success) {
alert('successful');
fetchAndDisplayPoses(); 
} else {
alert('Error: ' + result.message);
}
} catch (error) {

console.error('error:', error);
alert('error.');
}
};

fetchAndDisplayPoses();
});
