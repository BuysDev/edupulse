"use client"
import { Calendar, Clock, Target, TrendingUp, BookOpen, Award, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface EngagementData {
  completedActivities: number
  totalActivities: number
  studyTime: string
  streak: number
  performance: number
  nextActivities: Array<{
    id: string
    title: string
    subject: string
    dueDate: string
    type: "exam" | "assignment" | "reading"
  }>
  weeklyProgress: Array<{
    day: string
    completed: boolean
  }>
}

const engagementData: EngagementData = {
  completedActivities: 24,
  totalActivities: 30,
  studyTime: "2h 45min",
  streak: 7,
  performance: 85,
  nextActivities: [
    {
      id: "1",
      title: "Simulado ENEM - Matemática",
      subject: "Matemática",
      dueDate: "Hoje",
      type: "exam",
    },
    {
      id: "2",
      title: "Redação - Tema Social",
      subject: "Português",
      dueDate: "Amanhã",
      type: "assignment",
    },
    {
      id: "3",
      title: "Leitura Cap. 5 - Química Orgânica",
      subject: "Química",
      dueDate: "2 dias",
      type: "reading",
    },
  ],
  weeklyProgress: [
    { day: "S", completed: true },
    { day: "T", completed: true },
    { day: "Q", completed: true },
    { day: "Q", completed: true },
    { day: "S", completed: true },
    { day: "S", completed: true },
    { day: "D", completed: true },
  ],
}

const getActivityIcon = (type: string) => {
  switch (type) {
    case "exam":
      return <Target className="h-4 w-4" />
    case "assignment":
      return <BookOpen className="h-4 w-4" />
    case "reading":
      return <Calendar className="h-4 w-4" />
    default:
      return <BookOpen className="h-4 w-4" />
  }
}

const getActivityColor = (type: string) => {
  switch (type) {
    case "exam":
      return "bg-red-100 text-red-700"
    case "assignment":
      return "bg-blue-100 text-blue-700"
    case "reading":
      return "bg-green-100 text-green-700"
    default:
      return "bg-gray-100 text-gray-700"
  }
}

export default function StudentEngagementCard() {
  const completionRate = Math.round((engagementData.completedActivities / engagementData.totalActivities) * 100)

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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Engagement Card */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              Engajamento do Estudante
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{engagementData.completedActivities}</div>
                <div className="text-sm text-gray-600">Atividades Concluídas</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{engagementData.studyTime}</div>
                <div className="text-sm text-gray-600">Tempo de Estudo Hoje</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">{engagementData.streak}</div>
                <div className="text-sm text-gray-600">Dias Consecutivos</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">{engagementData.performance}%</div>
                <div className="text-sm text-gray-600">Performance Geral</div>
              </div>
            </div>

            {/* Progress Section */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Progresso Semanal</span>
                <span className="text-sm text-gray-500">{completionRate}% concluído</span>
              </div>
              <Progress value={completionRate} className="h-2 mb-4" />

              {/* Weekly Progress Dots */}
              <div className="flex justify-center space-x-2">
                {engagementData.weeklyProgress.map((day, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                        day.completed ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {day.day}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement Badge */}
            <div className="flex items-center justify-center p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
              <Award className="h-6 w-6 text-yellow-600 mr-2" />
              <span className="text-sm font-medium text-yellow-800">🔥 Sequência de 7 dias! Continue assim!</span>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Activities Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-purple-600" />
              Próximas Atividades
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {engagementData.nextActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className={`p-2 rounded-full ${getActivityColor(activity.type)}`}>
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-900 truncate">{activity.title}</h4>
                    <p className="text-xs text-gray-500">{activity.subject}</p>
                    <div className="flex items-center justify-between mt-1">
                      <Badge variant="outline" className="text-xs">
                        {activity.dueDate}
                      </Badge>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </div>
              ))}
            </div>

            <Button variant="outline" className="w-full mt-4 bg-transparent">
              Ver Todas as Atividades
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button variant="default" className="bg-blue-600 hover:bg-blue-700 text-white p-4 h-auto">
          <div className="text-center">
            <BookOpen className="h-6 w-6 mx-auto mb-2" />
            <div className="font-medium">Iniciar Estudo</div>
            <div className="text-xs opacity-90">Continuar onde parou</div>
          </div>
        </Button>

        <Button variant="outline" className="p-4 h-auto bg-transparent">
          <div className="text-center">
            <Target className="h-6 w-6 mx-auto mb-2" />
            <div className="font-medium">Simulados</div>
            <div className="text-xs text-gray-500">Pratique para o ENEM</div>
          </div>
        </Button>

        <Button variant="outline" className="p-4 h-auto bg-transparent">
          <div className="text-center">
            <TrendingUp className="h-6 w-6 mx-auto mb-2" />
            <div className="font-medium">Relatórios</div>
            <div className="text-xs text-gray-500">Veja seu progresso</div>
          </div>
        </Button>
      </div>
    </div>
  )
}
