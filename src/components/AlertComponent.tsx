import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const AlertComponent = () => {
    return (
        <div>
            <Alert variant={"destructive"} className="w-[400px] justify-end">

                <AlertTitle>Alert</AlertTitle>
                <AlertDescription>
                    Login via credentials is disabled due to security reasons.
                    Access using Google or Github
                </AlertDescription>
            </Alert>
        </div>
    )
}

export default AlertComponent