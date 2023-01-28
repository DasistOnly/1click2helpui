Standard Export to use HelpUI

## Usage

exports['1click2helpui']:HelpUI(msg)

## Replace ESX.ShowHelpNotification

## Instructions

Go to your es_extended/client/functions.lua and replace the entire function ESX.ShowHelpNotification with the following:

ESX.ShowHelpNotification = function(msg, thisFrame, beep, duration)
    exports['1click2helpui']:HelpUI(msg)
end