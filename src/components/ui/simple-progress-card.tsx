"use client"

import { TrendingUp, Calendar, Clock, BookOpen, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SimpleProgressCard() {
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

      {/* Simple Progress Card */}
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <TrendingUp className="h-5 w-5" />
            Progresso e Engajamento
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Frequency */}
            <div className="text-center">
              <Calendar className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold text-gray-900">96%</div>
              <div className="text-sm text-gray-600">Frequência</div>
              <div className="text-xs text-gray-500 mt-1">1 falta este mês</div>
            </div>

            {/* Study Time */}
            <div className="text-center">
              <Clock className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold text-gray-900">3h 20min</div>
              <div className="text-sm text-gray-600">Tempo Hoje</div>
              <div className="text-xs text-gray-500 mt-1">Meta: 4h diárias</div>
            </div>

            {/* Activities */}
            <div className="text-center">
              <BookOpen className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold text-gray-900">12</div>
              <div className="text-sm text-gray-600">Atividades</div>
              <div className="text-xs text-gray-500 mt-1">Concluídas esta semana</div>
            </div>

            {/* Performance */}
            <div className="text-center">
              <Target className="h-8 w-8 mx-auto mb-2 text-orange-600" />
              <div className="text-2xl font-bold text-gray-900">87%</div>
              <div className="text-sm text-gray-600">Performance</div>
              <div className="text-xs text-gray-500 mt-1">Média geral</div>
            </div>
          </div>

          {/* Simple Progress Bar */}
          <div className="mt-8 pt-6 border-t">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Meta Semanal</span>
              <span className="text-sm text-gray-600">73%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: "73%" }}></div>
            </div>
          </div>

          {/* View Details Link */}
          <div className="flex justify-end mt-4">
            <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              Ver detalhes →
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
