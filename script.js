// JavaScript code to handle dynamic options addition

document.getElementById('busType').addEventListener('change', function() {
  var selectedBusType = this.value;
  var roadwaysOptions = document.getElementById('roadwaysOptions');
  
  if (selectedBusType === 'roadways') {
    roadwaysOptions.style.display = 'block';
  } else {
    roadwaysOptions.style.display = 'none';
  }
});
