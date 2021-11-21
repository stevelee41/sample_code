function goToChecklists () {
  window.location.href = "clinical_checklists.html";
}

function goToTest () {
  window.location.href = "test.html";
}

function goToWellness () {
  window.location.href = "Wellness.html";
}
function goToCOVID19 () {
  window.location.href = "COVID19.html";
}

function goToCalculators () {
  window.location.href = "clinical_calculators.html";
}

function goToCriticalCare () {
  window.location.href = "critical_care_for_hospitalists.html";
}

function goToGI () {
  window.location.href = "gastroenterology.html";
}

function goToID () {
  window.location.href = "infectious_disease.html";
}

function goToMSK () {
  window.location.href = "MSK.html";
}
function goToNeuro () {
  window.location.href = "neurology.html";
}

function goToPulm () {
  window.location.href = "pulmonary.html";
}

function goToRenal () {
  window.location.href = "renal.html";
}

function goToAcidBase () {
  window.location.href = "electrolytes_acid_base.html";
}

function goToPsych () {
  window.location.href = "psychiatry.html";
}

function goToHematology () {
  window.location.href = "hematology.html";
}

function goToGI () {
  window.location.href = "gastroenterology.html";
}

function goHome() {
  window.location.href = "index.html";
}


/* **************************************************************************
            FLUIDS, ELECTROLYTES, ACID/BASE: CORRECTED CALCIUM
*************************************************************************** */
function corrCalcium() {
  let patientCalcium = Number(document.getElementById('ptCalcium').value);
  let patientAlbumin = Number(document.getElementById('ptAlbumin').value);
  let normalAlbumin = Number(document.getElementById('nlAlbumin').value);

  let correctedCalcium = (0.8 * (normalAlbumin - patientAlbumin)) + patientCalcium;
  let correctedCalciumOutput = 'Corrected calcium is ' + correctedCalcium;

   /* let bigCalcium = correctedCalcium.style.fontSize = 'x-large';  */

  document.getElementById('corrCalciumOutput').innerHTML = correctedCalciumOutput;
  document.getElementById('corrCalciumOutput').style.fontSize = '1.5rem';

}

function clearCorrCalciumFields() {
  document.getElementById('ptCalcium').value="";
  document.getElementById('ptAlbumin').value="";
}  /* closing for CLEAR LIGHTS FIELDS */


/* **************************************************************************
                    NEUROLOGY:
*************************************************************************** */

/* sets CHECKED value for CVA CHECKLIST checkboxes to "FALSE" */
function clearCVAchkbox() {
  let i=0;
  let cvaChecklist = document.getElementsByClassName('cvaCheckbox');

  for (i=0; i < cvaChecklist.length; i++) {
    cvaChecklist[i].checked = false;
  }
}


/* sets CHECKED value for LP CHECKLIST checkboxes to "FALSE" */
function clearLPchkbox () {
  let i=0;
  let lpChecklist = document.getElementsByClassName('lpCheckbox');

  for (i=0; i < lpChecklist.length; i++) {
    lpChecklist[i].checked = false;
  }
}


/* **************************************************************************
                    PULMONARY: LIGHT'S CRITERIA
*************************************************************************** */
function lightsCriteria() {
  let fProtein = Number(document.getElementById('fluidProtein').value);
  let sProtein = Number(document.getElementById('serumProtein').value);
  let fLDH = Number(document.getElementById('fluidLDH').value);
  let sLDH = Number(document.getElementById('serumLDH').value);
  let exOutput = '<h4>Pleural fluid is exudate</h4>'
    + '<br>' + '<p>causes of exudate include:</p>' + '<br>'
    + '<ul>'
      + '<li>infection</li>'
      + '<li>malignancy</li>'
    + '</ul>';
  let trOutput = '<h4>Pleural fluid is transudate</h4>'
    + '<br>' + '<p>causes of transudate include:</p>' + '<br>'
    + '<ul>'
      + '<li>CHF</li>'
      + '<li>cirrhosis</li>'
      + '<li>nephrotic syndrome</li>'
    + '</ul>';


  let userLightsValues = [
      ['Pleural Fluid Protein', fProtein],
      ['Pleural Fluid LDH', fLDH],
      ['Serum Protein', sProtein],
      ['Serum LDH', sLDH]
    ];
  let i = 0;

  /* check that form fields are populated */
  for (i=0; i < userLightsValues.length; i++) {
    if (userLightsValues[i][1]=='') {
      alert ('Please enter a value for ' + userLightsValues[i][0]);
    }
  }
  /* check that entered values are numeric */

  for (i=0; i < userLightsValues.length; i++) {
    if (isNaN(userLightsValues[i][1])) {
      alert ('Please enter a numeric value for ' + userLightsValues[i][0]);
    }
  }

  /* check that entered values for serum protein make sense */
  if (sProtein < 5 || sProtein > 9)
  {
    alert ('Serum protein values are typically between 6 and 8 g/dL');
  }

  /* check that entered values for serum LDH make sense */
  if (sLDH < 100 || sLDH > 500) {
    alert ('Serum LDH values are typically between 140 and 280 U/L');
  }


  /*  apply Light's Criteria */
  if ((fProtein>0) && (sProtein>0) && (fProtein/sProtein)>0.5) {
    document.getElementById('LightsOutput').innerHTML = exOutput;
  }
    else if (fProtein==0 || sProtein==0) {
      document.getElementById('LightsOutput').innerHTML = 'Please enter values for pleural fluid and serum protein';
    }

    else if ((fLDH>0) && (sLDH>0) && (fLDH/sLDH)>0.6) {
      document.getElementById('LightsOutput').innerHTML = "Pleural fluid is exudate";
    }

    else {
      document.getElementById('LightsOutput').innerHTML = trOutput;
    }

} /* closing for LIGHTS CRITERIA */


function clearLightsFields() {
  document.getElementById('fluidProtein').value="";
  document.getElementById('serumProtein').value="";
  document.getElementById('fluidLDH').value="";
  document.getElementById('serumLDH').value="";
}  /* closing for CLEAR LIGHTS FIELDS */
