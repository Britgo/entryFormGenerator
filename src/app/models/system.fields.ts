// This page contains code used in order to generate the last part of the entry form page

import {TableGenerator} from "./table.generator";
import {TourConfig} from "./tour.config";


/*This function is used in order to return the last part of the entry form page.*/
export function getSystemFields(custom_block: TableGenerator, tour_config: TourConfig) {
  // Now we get the code used to initialize the custom cells needing initialization.
  // Start by writing the initial bit of the initialization block.
  let initializationString: string = `

    <!-- ---------------------------------------------------------------------------------- -->
    <!-- TOOLTIP BOX                                                                        -->
    <!-- ---------------------------------------------------------------------------------- -->
<div id="id_tiptxt" hidden>
Either hover or click
<br>
on an info icon <span class="icon-i-new"> i </span>
<br>
for help.
</div>

<div id="id_tooltip" class="dv-tooltip-new"
     onclick="show_default_tip()"
     title="Either hover or click on an info icon (i) for help.">
</div>

    <!-- ---------------------------------------------------------------------------------- -->
    <!-- INITIALISATION FOR CUSTOM BLOCK                                                    -->
    <!-- ---------------------------------------------------------------------------------- -->
    <script type="text/javascript">
  var default_custom_fields = function default_custom_fields() {`;

  // For every cell needing initialization we add the corresponding starting value.
  for (let cell of custom_block.getAllCells()) {
    initializationString = initializationString + cell.getSetupJavascriptCode();
  }
  // add the last part of the initialization block.
  initializationString = initializationString + `  }
  var custom_submit = function custom_submit() { return document.getElementById("id_entryform").submit(); }
    </script>`;

  // We place the above in the appropriate spaces of the system fields template and return the result.
  return `<!-- ---------------------------------- SYSTEM FIELDS ---------------------------------- -->
<!-- ------------------------ Error message Visible during test ------------------------ -->
<div id="id_errlog" class="bk-error" hidden><br>ERROR<br></div>
  <!--                                                                                     -->
  <!--                                                                                     -->
  <span id="id_tourtitle" hidden>`+tour_config.getTourTitle()+`</span>              <!-- Browser Tab title -->

<span id="id_fstatus" hidden>st-test</span>                            <!-- Form status  -->
<!-- The content  can be set to one of:                                                  -->
<!-- 'st-test' - emails are written to files on the server                               -->
<!-- 'st-live' - emails are sent to player and TD                                        -->

<input id="id_tbase"  name="SYS-TOURBASE" type="hidden" value="`+tour_config.getTourBase()+`">
  <!-- SYS-TOURBASE defines the name of the directory containing the entryform.html file.  -->
<!-- This directory must be a child of 'tournaments'                                     -->

<input id="id_pstate" name="SYS-PSTATE"   type="hidden" value="E">        <!-- automatic -->

  <!-- The PSTATE is the last field of the player record in player-entries.txt             -->
<!-- The field value can be one of:                                                      -->
<!--                                                                                     -->
<!-- E - player entered and published                                                    -->
<!-- A - player entered anonymously                                                      -->
<!-- D - player has been deleted (reserved for the future)                               -->
</form>

<!-- ----------------------------------------------------------------------------------- -->
<!-- JAVASCRIPT                                                                          -->
<!-- ----------------------------------------------------------------------------------- -->
<noscript>
As Javascript appears to be missing or turned off, the form cannot be processed.<br><br>

  Please email the tournament director stating: <br>
  your name, grade, club, and country.<br><br>

  Many thanks.
</noscript>

<script src = "../errlogsys/debug-tool.js"> </script>
  <script src = "../egdsys/egd-ajax-interface.js"> </script>
  <script src = "../entrysys/entryform-interface-new.js"> </script>

`+initializationString+`

  <!-- ---------------------------------------------------------------------------------- -->
  <!-- STARTUP ACTION                                                                     -->
  <!-- ---------------------------------------------------------------------------------- -->
  <script type="text/javascript"> default_startup(); </script>
<!-- ---------------------------------------------------------------------------------- -->
</body>
</html>`;
}
