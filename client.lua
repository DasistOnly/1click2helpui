local spawned, waiter, todetect = false, 0, { '<', '>', '.mp4', '.mp3', '.ogg', '.wav', }

function spawnhelpui(msg)
    if msg == nil then return end
    for i = 1, #todetect do
        if string.find(msg, todetect[i]) then
            msg = ''
        end
    end
    if msg == '' then
        SendNUIMessage({ action = 'closeui' })
        return
    end
    waiter = GetGameTimer()
    if spawned == false then
        spawned = true
        SendNUIMessage({ action = 'spawnui', msg = msg, })
        CreateThread(function()
            local success, result = pcall(function()
            while waiter+100 >= GetGameTimer() do Wait(250) end
            spawned = false
            Wait(250)
            while spawned do
                Wait(100)
            end
                SendNUIMessage({ action = 'closeui' })
            end)
            if not success then return end
        end)
    end
end


exports('HelpUI', spawnhelpui)