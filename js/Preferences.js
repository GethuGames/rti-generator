/**
Online RTI Generator
grayfaceofindia.in
saiy2k (http://saiy2k.blogspot.in)

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>
*/

/**
 * User Preferences
 * This is a wrapper over HTML5 Local Storage (http://www.w3schools.com/html/html5_webstorage.asp)
 * This wrapper syncs the values related to user's between the 
 * local storage and our server
 *
 * The fields are as given below:
 *
 * User Details
        email               :   "citizen@india.com",
        name                :   "Subash Gandhi",
        address             :   "Independent India",
        city                :   "Delhi",
        state               :   "Delhi",
        pinCode             :   "600001",
        fbLinked            :   true,

 * Default Fee Payment mode
 * Values::courtFee, demandDraft, indianPostalOrder
         
        defaultFee          :   "courtFee"

 * Default privacy mode
 * Values: anonymous, normal, public
 *
        defaultPrivacy      :   "normal"

 * Default format to generate the RTI
 * Values: docx, rtf, odf
 *
        defaultDocFormat    :   "rtf"

 * Selected Language
 * Values: english, tamil, hindi, etc.,
 *
        language            :   "english"

 * Index used to sync the profile between local storage and server
 * If localIndex == serverIndex
 *  both are in sync
 * else if localIndex < serverIndex
 *  local values are old, update them from server
 * else if localIndex > serverIndex
 *  local values are updated, push them to server
 *
 *      profileIndex        :   0;

 */
(function(undefined) {
    RTI.Profile             =   function() {
        /**
         * This functions 
         */
        syncPreferences()   :   function() {
            var serverIndex;
            var localIndex;

            // TODO:
            // get index of user profile from server

            if (localStorage.profileIndex > serverIndex) {
                // TODO;
                // POST values to server
            } else if (localStorage.localIndex < serverIndex) {
                // TODO;
                // GET values from server 
            }
        }

    };
})();
