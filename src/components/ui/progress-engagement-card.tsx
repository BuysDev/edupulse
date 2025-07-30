"use client"

import { TrendingUp, Calendar, Clock } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function ProgressEngagementCard() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-sm mb-4">
        <a href="#" className="text-blue-600 hover:underline">
          Home
        </a>
        <span className="text-gray-400">›</span>
        <span className="text-gray-600">Dashboard</span>
      </nav>

      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Meu Painel de Estudos</h1>

      {/* Progress and Engagement Card */}
      <Card className="w-full border border-gray-200 shadow-sm">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-gray-700" />
            <h2 className="text-lg font-semibold text-gray-900">Progresso e Engajamento</h2>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-4">
            {/* Frequency Section */}
            <div>
              <h3 className="text-base font-medium text-teal-600 mb-3">Frequência</h3>

              <div className="space-y-3">
                {/* Absences */}
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-900">
                    <span className="font-semibold">1</span> faltas
                  </span>
                </div>

                {/* Delays */}
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-900">
                    <span className="font-semibold">0</span> atrasos
                  </span>
                </div>
              </div>
            </div>

            {/* View Details Link */}
            <div className="flex justify-end pt-2">
              <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline text-sm font-medium">
                Ver detalhes
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
