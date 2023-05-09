import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CheckBox, DropDown, Radio} from "../models";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css', '../app.component.css']
})
export class EditorComponent{
  tournamentName: string = 'go-club-year';
  @Input() radioList: Radio[] = [];
  @Input() checkBoxList: CheckBox[] = [];
  @Input() dropDownList: DropDown[] = [];

  @Output() updateRadio = new EventEmitter<Radio[]>();
  @Output() updateCheckBox = new EventEmitter<CheckBox[]>();
  @Output() updateDropDown = new EventEmitter<DropDown[]>();

  constructor(private sanitizer: DomSanitizer) {
  }

  downloadEntryForm() {
    const blob = new Blob([this.generateHTMLCode()], {type: 'application/octet-stream'});
    let anchor: HTMLAnchorElement = document.createElement('a');
    anchor.download = "entry-form.html";
    anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
    anchor.click();
  }

  generateHTMLCode() {
    let html_str = `<!DOCTYPE html>
<!-- ---------------------------------------------------------------------------------- -->
<!-- ENTRY FORM FOR tour                                                        G Kaniuk Jan 2019-->
<!-- ---------------------------------------------------------------------------------- -->
<!--  -->
<!-- THE MAIN FORM consists of the following blocks: -->
<!--  -->
<!--    EGD SEARCH BLOCK -->
<!--    PLAYER DETAILS BLOCK -->
<!--    CUSTOM BLOCK -->
<!--    SUBMIT BLOCK -->
<!--    SYSTEM BLOCK -->
<!--  -->
<!-- The following html element names are reserved for future use: -->
<!--    ID, REG, NAME,NAME-GF,NAME-FG,  GROUP, ROUNDS -->
<!-- ---------------------------------------------------------------------------------- -->

<html lang="en">
<head>
  <meta charset="utf-8" />
  <link rel="stylesheet" type="text/css" href="style-reset.css">
  <link rel="stylesheet" type="text/css" href="entryform-style.css">

  <title>`;

    // Add tournament title.
    html_str = html_str + this.tournamentName;
    html_str = html_str + `</title>

</head>
<body>
<!-- ---------------------------------------------------------------------------------- -->
<!-- MAIN FORM                                                                                                                                                  -->
<form class="frm-entry" id="id_entryform"
      action="entryform-handler.php" method="post"
      autocomplete="on" onsubmit= "return submit_entry()"
>

  <div id="id_tiptxt" hidden>
    Either hover or click<br><br> on an info icon <span class="icon-i"> i </span><br><br>for help.
  </div>

  <div id="id_tooltip" class="dv-tooltip" onclick="show_default_tip()"
       title=
         "Either hover or click on an info icon (i) for help.">
  </div>

  <!-- ----------------------------------------------------------------- EGD SEARCH BLOCK -->
  <fieldset class="bk-fields">
    <div class="dv-fields bk-fields">
<span class="sp-left "><!-- ---------------------------------------------- Given Initial -->
<span class="sp-left">Given Initial</span><br>
<span class="sp-left">
<input id="id_gsearch" class="in-short" type="text"
       placeholder="given"
       onkeyup="handle_keyup_qdata('id_gsearch', event)"
>
</span>

<span class="sp-left">
<img id="id_sgiven" class="icon-help" src="info.png" alt="info" onclick="show_info('id_sgiven')"
     title="Type the initial character(s) of your first name.
Please type underscore (_) if you have no first name.
The EGD search starts once you begin typing your family initial."
>
</span>
 </span>

      <span class="sp-left "><!-- ---------------------------------------------- Family  Initial -->
<span class="sp-left">&nbsp;&nbsp;&nbsp;Family Initial</span><br>
<span class="sp-left">
&nbsp;&nbsp;&nbsp;<input id="id_fsearch" class="in-short" type="text"
                         placeholder="family"
                         onkeyup="handle_keyup_qdata('id_fsearch', event)"
>
</span>
<span class="sp-left">
<img id="id_sfamily" class="icon-help" src="info.png" alt="info" onclick="show_info('id_sfamily')"
     title="Type the initial character(s) of your surname to begin the EGD search.">
</span>
</span>

      <span class="sp-right "><!-- ---------------------------------------------------- EGD pin -->
<span class="sp-left">EGD pin</span><br>
<span class="sp-left">
<input id="id_egdpin"  class="in_egdpin" type="text" maxlength = "8"
       name="EGDPIN" value = ""
       onkeyup = "handle_keyup_qpin(event)" placeholder="8 digit pin"
       title="Your EGD pin is automatically set if your name is found."
>
</span>
<span class="sp-left">
<img id="id_segdpin" class="icon-help" src="info.png" alt="info" onclick="show_info('id_segdpin')"
     title="Type your 8 digit EGD pin.&#13;
The pin is automatically set if you searched using your initials."
>
</span>
</span>
      <br>

      <span class="sp-shim vs-max"> </span><!-- --------------------------------- Country Code -->
      <span class="sp-left">
<span class="sp-left">Country Code</span><br>
<div>
<span class="sp-left">
<input id="id_lsearch" class="in-short"  type="text" maxlength="2"
       onkeyup="handle_keyup_qdata('id_lsearch', event)"
       placeholder="ISO code"
>
</span>
<span class="sp-left">
<img id="id_slcode" src="info.png" class="icon-help" onclick="show_info('id_slcode')"
     alt="info" title="You can change the 2 character country code if needed.
This will start a new search."
>
</span>
</div>
      </span>
      <br>

      <span id="id_nplayer" class= "sp-nplayer">0</span><!-- -------------------- Player List -->
      <span class="sp-pcount"> PLAYER COUNT</span>
      <select id="id_players" class="cl_playerlist vs-del" title="list of EGD players"
              onchange="handle_playerlist_change()"
      >
        <option value="0">NO PLAYERS</option>
      </select>
    </div>
  </fieldset>

  <!-- ------------------------------------------------------------- PLAYER DETAILS BLOCK -->
  <fieldset class="bk-fields">
    <div class="dv-fields bk-fields"> <!-- ------------------------------------ Family name -->
      <span class="sp-left">Family Name</span>
      <br>
      <span class="sp-left">
<input id="id_fname" class="in-full" name="FAMILY" type="text"  value=""
       maxlength="42"
       title="A family name may not be empty."
>
</span>
      <span class="sp-left">
<img id="id_finfo" src="info.png" class= "icon-help" alt="info" onclick="show_info('id_finfo')"
     title=
       "You can edit the fields in this section if your EGD details are incorrect.
A family name may contain hyphen (-), apostrophe('), space ( ), or underscore(_).
Family name must not be empty.
" >
</span>
    </div>
    <br>
    <div class="dv-fields bk-fields"> <!-- ------------------------------------- Given name -->
      <span class="sp-left">Given Name</span>
      <span class="sp-left">
<input id="id_gname" class="in-full" name="GIVEN" type="text"  value=""
       maxlength="42"
       title="Your given name must not be blank - use underscore (_) if needed."
>
</span><!DOCTYPE html>
<!-- ---------------------------------------------------------------------------------- -->
<!-- ENTRY FORM FOR tour                                                        G Kaniuk Jan 2019-->
<!-- ---------------------------------------------------------------------------------- -->
<!--  -->
<!-- THE MAIN FORM consists of the following blocks: -->
<!--  -->
<!--    EGD SEARCH BLOCK -->
<!--    PLAYER DETAILS BLOCK -->
<!--    CUSTOM BLOCK -->
<!--    SUBMIT BLOCK -->
<!--    SYSTEM BLOCK -->
<!--  -->
<!-- The following html element names are reserved for future use: -->
<!--    ID, REG, NAME,NAME-GF,NAME-FG,  GROUP, ROUNDS -->
<!-- ---------------------------------------------------------------------------------- -->

<html lang="en">
<head>
  <meta charset="utf-8" />
  <link rel="stylesheet" type="text/css" href="style-reset.css">
  <link rel="stylesheet" type="text/css" href="entryform-style.css">

  <title>TOUR-year</title>
</head>
<body>
<!-- ---------------------------------------------------------------------------------- -->
<!-- MAIN FORM                                                                                                                                                  -->
<form class="frm-entry" id="id_entryform"
      action="entryform-handler.php" method="post"
      autocomplete="on" onsubmit= "return submit_entry()"
>

  <div id="id_tiptxt" hidden>
    Either hover or click<br><br> on an info icon <span class="icon-i"> i </span><br><br>for help.
  </div>

  <div id="id_tooltip" class="dv-tooltip" onclick="show_default_tip()"
       title=
         "Either hover or click on an info icon (i) for help.">
  </div>

  <!-- ----------------------------------------------------------------- EGD SEARCH BLOCK -->
  <fieldset class="bk-fields">
    <div class="dv-fields bk-fields">
<span class="sp-left "><!-- ---------------------------------------------- Given Initial -->
<span class="sp-left">Given Initial</span><br>
<span class="sp-left">
<input id="id_gsearch" class="in-short" type="text"
       placeholder="given"
       onkeyup="handle_keyup_qdata('id_gsearch', event)"
>
</span>

<span class="sp-left">
<img id="id_sgiven" class="icon-help" src="info.png" alt="info" onclick="show_info('id_sgiven')"
     title="Type the initial character(s) of your first name.
Please type underscore (_) if you have no first name.
The EGD search starts once you begin typing your family initial."
>
</span>
 </span>

      <span class="sp-left "><!-- ---------------------------------------------- Family  Initial -->
<span class="sp-left">&nbsp;&nbsp;&nbsp;Family Initial</span><br>
<span class="sp-left">
&nbsp;&nbsp;&nbsp;<input id="id_fsearch" class="in-short" type="text"
                         placeholder="family"
                         onkeyup="handle_keyup_qdata('id_fsearch', event)"
>
</span>
<span class="sp-left">
<img id="id_sfamily" class="icon-help" src="info.png" alt="info" onclick="show_info('id_sfamily')"
     title="Type the initial character(s) of your surname to begin the EGD search.">
</span>
</span>

      <span class="sp-right "><!-- ---------------------------------------------------- EGD pin -->
<span class="sp-left">EGD pin</span><br>
<span class="sp-left">
<input id="id_egdpin"  class="in_egdpin" type="text" maxlength = "8"
       name="EGDPIN" value = ""
       onkeyup = "handle_keyup_qpin(event)" placeholder="8 digit pin"
       title="Your EGD pin is automatically set if your name is found."
>
</span>
<span class="sp-left">
<img id="id_segdpin" class="icon-help" src="info.png" alt="info" onclick="show_info('id_segdpin')"
     title="Type your 8 digit EGD pin.&#13;
The pin is automatically set if you searched using your initials."
>
</span>
</span>
      <br>

      <span class="sp-shim vs-max"> </span><!-- --------------------------------- Country Code -->
      <span class="sp-left">
<span class="sp-left">Country Code</span><br>
<div>
<span class="sp-left">
<input id="id_lsearch" class="in-short"  type="text" maxlength="2"
       onkeyup="handle_keyup_qdata('id_lsearch', event)"
       placeholder="ISO code"
>
</span>
<span class="sp-left">
<img id="id_slcode" src="info.png" class="icon-help" onclick="show_info('id_slcode')"
     alt="info" title="You can change the 2 character country code if needed.
This will start a new search."
>
</span>
</div>
      </span>
      <br>

      <span id="id_nplayer" class= "sp-nplayer">0</span><!-- -------------------- Player List -->
      <span class="sp-pcount"> PLAYER COUNT</span>
      <select id="id_players" class="cl_playerlist vs-del" title="list of EGD players"
              onchange="handle_playerlist_change()"
      >
        <option value="0">NO PLAYERS</option>
      </select>
    </div>
  </fieldset>

  <!-- ------------------------------------------------------------- PLAYER DETAILS BLOCK -->
  <fieldset class="bk-fields">
    <div class="dv-fields bk-fields"> <!-- ------------------------------------ Family name -->
      <span class="sp-left">Family Name</span>
      <br>
      <span class="sp-left">
<input id="id_fname" class="in-full" name="FAMILY" type="text"  value=""
       maxlength="42"
       title="A family name may not be empty."
>
</span>
      <span class="sp-left">
<img id="id_finfo" src="info.png" class= "icon-help" alt="info" onclick="show_info('id_finfo')"
     title=
       "You can edit the fields in this section if your EGD details are incorrect.
A family name may contain hyphen (-), apostrophe('), space ( ), or underscore(_).
Family name must not be empty.
" >
</span>
    </div>
    <br>
    <div class="dv-fields bk-fields"> <!-- ------------------------------------- Given name -->
      <span class="sp-left">Given Name</span>
      <span class="sp-left">
<input id="id_gname" class="in-full" name="GIVEN" type="text"  value=""
       maxlength="42"
       title="Your given name must not be blank - use underscore (_) if needed."
>
</span>
      <span class="sp-left">
<img id="id_ginfo" src="info.png" class= "icon-help" alt="info" onclick="show_info('id_ginfo')"
     title=
       "Type your given name including any middle names if needed.
Use underscore (_) if you have no given name.
">
</span>

    </div>

    <span class="sp-shim vs-sec"></span>  <!-- -------------------------------------- Country -->
    <div class="dv-fields bk-fields">

      <span class="sp-left">Country Code</span>
      <span class="sp-land">Country Name</span>
      <br>
      <span class="sp-left">
<input id="id_lcode" class="in-short" name="CODE-CY" type="text"
       maxlength=2 value=""
       title = "A 2 letter country code"
>
</span>
      <span class="sp-left">
<img id="id_ccicon" src="info.png" class="icon-help" alt="info" onclick="show_info('id_ccicon')"
     title="We need your two-letter country code.
 You can select from the Country Name list instead.">
</span>
      <span class="sp-right">
<select id="id_lname" class="in-selcy" name="COUNTRY"
        onchange="set_lcode()"
        title="The country code will take precedence."
>
<option value="..." selected="selected">COUNTRY NAMES</option>
<option value="AD">Andorra</option>
<option value="AR">Argentina</option>
<option value="AM">Armenia</option>
<option value="AU">Australia</option>
<option value="AT">Austria</option>
<option value="AZ">Azerbaijan</option>
<option value="BY">Belarus</option>
<option value="BE">Belgium</option>
<option value="BA">Bosnia</option>
<option value="BR">Brasile</option>
<option value="BN">Brunei</option>
<option value="BG">Bulgaria</option>
<option value="CA">Canada</option>
<option value="CN">China</option>
<option value="CL">Cile</option>
<option value="CO">Colombia</option>
<option value="CR">Costa Rica</option>
<option value="HR">Croatia</option>
<option value="CU">Cuba</option>
<option value="CY">Cyprus</option>
<option value="CZ">Czechia</option>
<option value="DK">Denmark</option>
<option value="EC">Ecuador</option>
<option value="EE">Estonia</option>
<option value="FI">Finland</option>
<option value="FR">France</option>
<option value="DE">Germany</option>
<option value="GR">Greece</option>
<option value="GT">Guatemala</option>
<option value="HK">Hong Kong</option>
<option value="HU">Hungary</option>
<option value="IS">Iceland</option>
<option value="IN">India</option>
<option value="ID">Indonesia</option>
<option value="IR">Iran</option>
<option value="IE">Ireland</option>
<option value="IL">Israel</option>
<option value="IT">Italy</option>
<option value="JP">Japan</option>
<option value="KZ">Kazakhstan</option>
<option value="KP">Korea Popular Republic</option>
<option value="KR">Korea Republic</option>
<option value="LA">Laos</option>
<option value="LV">Latvia</option>
<option value="LT">Lithuania</option>
<option value="LU">Luxemburg</option>
<option value="MO">Macau</option>
<option value="MK">Macedonia</option>
<option value="MG">Madagascar</option>
<option value="MY">Malaysia</option>
<option value="MX">Mexico</option>
<option value="MD">Moldova</option>
<option value="MN">Mongolia</option>
<option value="MA">Morocco</option>
<option value="NP">Nepal</option>
<option value="NL">Netherlands</option>
<option value="NZ">New Zealand</option>
<option value="NO">Norway</option>
<option value="PA">Panama</option>
<option value="PE">Peru</option>
<option value="PH">Philippines</option>
<option value="PL">Poland</option>
<option value="PT">Portugal</option>
<option value="RS">Republic of Serbia</option>
<option value="RO">Romania</option>
<option value="RU">Russia</option>
<option value="SM">San Marino</option>
<option value="SG">Singapore</option>
<option value="SK">Slovakia</option>
<option value="SI">Slovenia</option>
<option value="ZA">South Africa</option>
<option value="ES">Spain</option>
<option value="SE">Sweden</option>
<option value="CH">Switzerland</option>
<option value="TW">Taiwan</option>
<option value="TH">Thailand</option>
<option value="TR">Turkey</option>
<option value="UA">Ukraine</option>
<option value="UK">United Kingdom</option>
<option value="US">United States</option>
<option value="XX">Unknown Country</option>
<option value="UY">Uruguay</option>
<option value="VE">Venezuela</option>
<option value="VN">Vietnam</option>
<option value="YU">Yugoslavia</option>
<option value="??">No Such Code</option>
</select>
</span>
    </div>

    <div class="dv-fields bk-fields"> <!-- ------------------------------------------- Club -->
      <span class="sp-left">Club Code</span>
      <span class="sp-club">Club Name</span>
      <br>
      <span class="sp-left">
<input  id="id_ccode" class="in-short" name="CODE-CB" type="text"
        maxlength="4" value=""
        title="club code letters or digits only (max 4 characters)">
</span>
      <img id="id_clicon" src="info.png" class="icon-help" alt="info" onclick="show_info('id_clicon')"
           title=
             "Type your club code here (1-4) characters.
Or leave it blank and type your club name."
      >

      <span class="sp-right">
<img id="id_cnicon" src="info.png" class="icon-help" alt="info" onclick="show_info('id_cnicon')"
     title=
       "Please type your club name. It can contain hyphens or spaces, but no digits.
We need only one of your code or name.
Correct your club name if you have moved clubs.
Tell the TD if you regularly play in several clubs.
">
</span>

      <span class="sp-right">
<input id="id_cname" class="in-cname" name="CLUB" type="text"
       title="The full club name can have hyphens &#13; or spaces, but no digits."
>
</span>
    </div>

    <div class="dv-fields bk-fields"><!-- ---------------------------------------- Grade -->
      <span class="sp-left">Grade</span>
      <span class="sp-strength">Strength</span>
      <br>

      <span class="sp-left">
<input id="id_grade" class="in-short" name="GRADE" type="text"
       maxlength="6" value=""
       title="One or two digits followed by k,d, or p"
>
</span>
      <img id="id_gricon" src="info.png" class="icon-help" alt="info" onclick="show_info('id_gricon')"
           title=
             "Please type your grade if this is your first rated tournament. We need 1 or 2 digits followed by k,d or p.
Otherwise it is your grade as known from your last tournament.
Please adjust if your Strength has changed."
      >

      <span class="sp-right">
<img id="id_sgicon" src="info.png" class="icon-help" alt="info" onclick="show_info('id_sgicon')"
     title=
       "Leave this blank if this is your first rated tournament.
If you have a rating, your entry Grade should be close to your rounded Strength.
Please let us know reasons if you wish to enter at a different grade."
>
</span>

      <span class="sp-rate">
<input id="id_rated" class= "in-strength" name="EGDRATE" type="text"
       title="Your strength is obtained from EGD. Please see the info to the right.">
</span>
    </div>


    <span class="sp-shim vs-sec"></span> <!-- ---------------------------------------- Status -->
    <div class="dv-fields bk-fields">
      <span class="sp-shim vs-mic"></span>
      <input  name="PLAYALL" type="hidden" value="N">
      <input id= "id_allrounds" name="PLAYALL" type="checkbox" value="Y" checked> Playing all rounds?
      <img id="id_plicon" class="icon-help" src="info.png" alt="info" onclick="show_info('id_plicon')"
           title=
             "If you are not playing in every round, please tell us.
You can use the comment box below for details."
      >

      <span class="sp-shim vs-big"></span>
      <br>
      <input  name="FIRST" type="hidden" value="N">
      <input id="id_firstegd" name="FIRST"  type="checkbox" value="Y"> First rated tournament?
      <img id="id_tficon" class="icon-help" src="info.png" alt="info" onclick="show_info('id_tficon')"
           title=
             "If you were not found on EGD, please confirm that this is your very first tournament in Europe.
If you have played in a rated tournament before, please try to find yourself on EGD.
Then, if you have made changes, tell us that the new details above are a correction to your EGD record."
      >
      <span class="sp-shim vs-big"></span>
      <br>
      <input  name="PUBLIC" type="hidden" value="N">
      <input id="id_public" name="PUBLIC"  type="checkbox" value="Y" checked> Public entry?
      <img id="id_puicon" class="icon-help" src="info.png" alt="info" onclick="show_info('id_puicon')"
           title=
             "If you wish to remain anonymous, please uncheck this box.
In that case we show only your grade on the entry list."
      >
    </div>

    <!-- --------------------------------------------------------------------- CUSTOM BLOCK -->
    <span class="sp-shim vs-sec"></span>
    <div class="dv-fields">
      <!--
      Add here input fields that do not require validation e.g. checkbox, radio buttons, dropdown list.
      See the Tourman documentation.
       -->

      <!-- radio -->
`;
    // Add Radio customizable items.
    for (let radioItem of this.radioList) {
      html_str = html_str + radioItem.toHTML();
    }


    // Add Checkbox customizable items.
    html_str = html_str + `
      <!-- EXAMPLE checkbox -->
`;
    for (let checkBoxItem of this.checkBoxList) {
      html_str = html_str + checkBoxItem.toHTML();
    }


    // Add DropDown customizable items.
    html_str = html_str + `
      // <!-- EXAMPLE dropdown -->
`;
    for (let dropDownItem of this.dropDownList) {
      html_str = html_str + dropDownItem.toHTML();
    }

      html_str = html_str + `
    </div>
  </fieldset>

  <!-- --------------------------------------------------------------------- SUBMIT BLOCK -->
  <fieldset class="bk-fields">
    <div class="dv-fields">
<span class="sp-left">
<input id="id_email" class="in-email" type="text"  value=""
       placeholder="current email address"
       title = "Please provide your current email address">
</span>

      <span class="sp-left vs-med">
<img id="id_emicon" class="icon-help" src="info.png" alt="info" onclick="show_info('id_emicon')"
     title="An email will be sent to you with all your form details.">
</span>

      <span class="sp-right vs-med"><!--  -->
<img id="id_evicon" class="icon-help" src="info.png" alt="info" onclick="show_info('id_evicon')"
     title=
       "Please ensure that your address is valid.
Check the box to confirm your address.
An email is sent to you with all your entry details.
Your email address is not stored anywhere by this form."
>
</span>

      <div id="id_emailquery" class="dv-emailchk">
        <input id= "id_emailcheck" type="checkbox" value="N" autocomplete="off"
               title="Please confirm that your address is valid &#13; and that you will monitor it">
        Valid email?
      </div>

      <span class="sp-right">
<input id = "id_pmail" name="PRI-EMAILPLAYER" type="hidden" value="nomail">
</span>

      <br>
      <textarea id="id_pnote" class="in-pnote" name="NOTE" rows="3" cols="30" maxlength="105"
                autocomplete="off"
                placeholder=
                  "Add here brief additional information.
For any complex issues, please email the Tournament Director."

                title = "Minimal punctuation is accepted in this comment field.">
</textarea>
      <br>

      <span class="sp-shim vs-max"></span>
      <input id="id_submit" class="in-control sp-left tf_larger" type="submit" value="Submit" enabled="true"
             title="the form data is sanitised and you will &#13; be asked to confirm changes made">

      <input id="id_restart" class="in-control sp-right tf_larger" type="button" value="Reset" onclick="restart()"
             title="restarts the page from scratch">
      <img id="id_suicon" class="icon-help" src="info.png" alt="info" onclick="show_info('id_suicon')"
           title="If you need to make a correction after you Submit the form:
Please just email the Tournament Director.
Try to avoid Submitting the form again - thanks.">

      <div id="id_errlog" class="bk-error" hidden><br>ERROR<br></div> <!-- Visible during test -->

    </div>
  </fieldset>

  <!-- -------------------------------------------------------------------- SYSTEM FIELDS -->
  <!--                                                                                                                                                                    -->
  <!--                                                                                                                                                                    -->
  <span id="id_tourtitle" hidden>` + this.tournamentName + `</span>                                  <!-- Browser Tab title -->

  <span id="id_fstatus" hidden>st-test</span>                                                       <!-- Form status  -->
  <!-- The content  can be set to one of:                                                                                                                 -->
  <!-- 'st-test' - emails are written to files on the server                                                              -->
  <!-- 'st-live' - emails are sent to player and TD                                                                               -->

  <input id="id_tbase"  name="SYS-TOURBASE" type="hidden" value="tourdir">
  <!-- SYS-TOURBASE defines the name of the directory containing the entryform.html file. -->
  <!-- This directory must be a child of 'tournaments'                                                                    -->

  <input id="id_pstate" name="SYS-PSTATE"   type="hidden" value="E">               <!-- automatic -->

  <!-- The PSTATE is the last field of the player record in player-entries.txt                    -->
  <!-- The field value can be one of:                                                                                                     -->
  <!--                                                                                                                                                                    -->
  <!-- E - player entered and published                                                                                                   -->
  <!-- A - player entered anonymously                                                                                                     -->
  <!-- D - player has been deleted (reserved for the future)                                                              -->
</form>

<!-- ---------------------------------------------------------------------------------- -->
<!-- JAVASCRIPT                                                                                 -->
<!-- ---------------------------------------------------------------------------------- -->
<noscript>
  As Javascript appears to be missing or turned off, the form cannot be processed.<br><br>

  Please email the tournament director stating: <br>
  your name, grade, club, and country.<br><br>
  Many thanks.
</noscript>

<script src = "../errlogsys/debug-tool.js"> </script>
<script src = "../egdsys/egd-ajax-interface.js"> </script>
<script src = "../entrysys/entryform-interface.js"> </script>

<!-- ---------------------------------------------------------------------------------- -->
<!-- INITIALISATION FOR CUSTOM BLOCK                                                                                                    -->
<!-- ---------------------------------------------------------------------------------- -->
<script type="text/javascript">
  var default_custom_fields = function default_custom_fields()
  {
`;

    // Add defaults for Radio customizable items.
    for (let radioItem of this.radioList) {
      html_str = html_str + radioItem.defaultToHTML();
    }

    // Add defaults for Checkbox customizable items.
    for (let checkBoxItem of this.checkBoxList) {
      html_str = html_str + checkBoxItem.defaultToHTML();
    }

    // Add defaults for DropDown customizable items.
    for (let dropDownItem of this.dropDownList) {
      html_str = html_str + dropDownItem.defaultToHTML();
    }


    html_str = html_str + `  }

  var custom_submit = function custom_submit() { return true; }
</script>

<!-- ---------------------------------------------------------------------------------- -->
<!-- STARTUP ACTION                                                                                                     -->
<!-- ---------------------------------------------------------------------------------- -->
<script type="text/javascript"> default_startup(); </script>
<!-- ---------------------------------------------------------------------------------- -->
</body>
</html>`;
    return html_str;
  }
}
