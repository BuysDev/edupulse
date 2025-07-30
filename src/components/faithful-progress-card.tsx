"use client"

import { useState } from "react"
import { TrendingUp, Calendar, Clock, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function FaithfulProgressCard() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="w-full mx-auto p-4">

      {/* Faithful Progress Card with Original Touch */}
      <Card
        className="w-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-gray-700" />
              <h2 className="text-lg font-semibold text-gray-900">Progresso e Engajamento</h2>
            </div>
            {/* Original touch: Status indicator */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500">Ativo</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-4">
            {/* Frequency Section - Faithful to original */}
            <div>
              <h3 className="text-base font-medium text-teal-600 mb-3">Frequência</h3>

              <div className="space-y-3">
                {/* Absences */}
                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-teal-600" />
                    <span className="text-gray-900">
                      <span className="font-semibold">1</span> faltas
                    </span>
                  </div>
                </div>

                {/* Delays */}
                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-teal-600" />
                    <span className="text-gray-900">
                      <span className="font-semibold">0</span> atrasos
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Original touch: Simple progress bar */}
            <div className="pt-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-gray-500">Presença</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1">
                <div
                  className="bg-teal-500 h-1 rounded-full transition-all duration-500"
                  style={{ width: isHovered ? "83%" : "80%" }}
                ></div>
              </div>
            </div>

            {/* View Details Link - Faithful to original */}
            <div className="flex justify-end pt-2">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 hover:underline text-sm font-medium transition-colors duration-200"
              >
                Ver detalhes
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
