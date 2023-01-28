local spawned, waiter, todetect = false, 0, { '<', '>', '.mp4', '.mp3', '.ogg', '.wav', }

function nui(type, msg)
    SendNUIMessage({ action = type, msg = msg, })
end

function spawnhelpui(msg)
    if msg == nil then return end
    for i = 1, #todetect do
        if string.find(msg, todetect[i]) then
            msg = 'Crosside Scripting Detected'
        end
    end
    if msg == 'Crosside Scripting Detected' then
        return
    end
    waiter = GetGameTimer()
    if spawned == false then
        spawned = true
        if string.find(msg, '~') then
            msg = string.gsub(msg, '~', '')
        end
        if string.find(msg, 'INPUT_CONTEXT') then
            msg = string.gsub(msg, 'INPUT_CONTEXT', 'E')
        end
        nui('spawnui', msg)
        CreateThread(function()
            local success, result = pcall(function()
            while waiter+100 >= GetGameTimer() do Wait(250) end
            spawned = false
            Wait(400)
            if spawned == 'false' then nui('break', nil)
                end
            end)
            if not success then return end
        end)
    end
end


exports('HelpUI', spawnhelpui)