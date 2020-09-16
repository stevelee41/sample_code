<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Welcome to Hospitalist Hub</title>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="stylesheet" href="myStyles.css">
  </head>
  <body>
  <!-- ***************************************************************************************** -->
  <!-- *****                                NAVBAR                                         ***** -->
  <!-- ***************************************************************************************** -->


  <!-- ***************************************************************************************** -->
  <!-- *****                             MAIN CONTENT                                      ***** -->
  <!-- ***************************************************************************************** -->

  <div class="container">
    <h1 class='h1text'>Hospitalist Hub</h1>
    <!-- card for CLINICAL CHECKLISTS -->
    <div class="card mb-4">
      <div class="card-body w-80 text-center">
        <button type="button" class="btn btn-primary btn-lg btn-block" onclick='goToChecklists()'>Clinical checklists</button>
      </div>
    </div>

    <!-- card for CRITICAL CARE -->
    <div class="card mb-4">
      <div class="card-body w-80 text-center">
        <button type="button" class="btn btn-primary btn-lg btn-block" onclick='goToCriticalCare()'>Critical care for hospitalists</button>
      </div>
    </div>

    <!-- card for ELECTROLYTES ACID BASE -->
    <div class="card mb-4">
      <div class="card-body w-80 text-center">
        <button type="button" class="btn btn-primary btn-lg btn-block" onclick='goToAcidBase()'>Fluids, Electrolytes, Acid-base</button>
      </div>
    </div>

    <!-- card for RENAL -->
    <div class="card mb-4">
      <div class="card-body w-80 text-center">
        <button type="button" class="btn btn-primary btn-lg btn-block" onclick='goToRenal()'>Renal</button>
      </div>
    </div>


    <!-- card for NEUROLOGY -->
    <div class="card mb-4">
      <div class="card-body w-80 text-center">
        <button type="button" class="btn btn-primary btn-lg btn-block" onclick='goToNeuro()'>Neurology</button>
      </div>
    </div>

    <!-- card for PSYCHIATRY -->
    <div class="card mb-4">
      <div class="card-body w-80 text-center">
        <button type="button" class="btn btn-primary btn-lg btn-block" onclick='goToPsych()'>Psychiatry</button>
      </div>
    </div>


    <button type="button" class="btn btn-primary btn-lg w-80" onclick='goHome()'>Back to homepage</button>

  </div>  <!-- closing DIV for CONTAINER -->

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <script src='hhub.js'></script>
  </body>
</html>
