"use client"

import { useState, useEffect } from "react"
import { TrendingUp, Zap, Target, Calendar, Clock, Star, Award, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function UniqueProgressCard() {
  const [animatedScore, setAnimatedScore] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const targetScore = 87
  const streakDays = 12
  const weeklyGoal = 85
  const currentProgress = 73

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setAnimatedScore((prev) => {
          if (prev < targetScore) {
            return prev + 1
          }
          clearInterval(interval)
          return targetScore
        })
      }, 30)
    }, 500)

    return () => clearTimeout(timer)
  }, [targetScore])

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

      {/* Unique Progress Card */}
      <Card
        className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 transform transition-all duration-300 hover:scale-[1.02]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-300 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-cyan-300 rounded-full blur-xl animate-ping"></div>
        </div>

        <CardContent className="relative z-10 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Score Circle */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-8 border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-1">{animatedScore}%</div>
                    <div className="text-white/80 text-sm font-medium">Engajamento</div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-spin">
                    <Star className="w-4 h-4 text-yellow-800" />
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <div className="text-white/90 text-sm">Nível Atual</div>
                <div className="text-white font-semibold">Estudante Dedicado</div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Estatísticas
              </h3>

              <div className="space-y-3">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-yellow-300" />
                      <span className="text-white/90">Sequência</span>
                    </div>
                    <div className="text-white font-bold">{streakDays} dias</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-green-300" />
                      <span className="text-white/90">Frequência</span>
                    </div>
                    <div className="text-white font-bold">96%</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-blue-300" />
                      <span className="text-white/90">Tempo Hoje</span>
                    </div>
                    <div className="text-white font-bold">3h 20min</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Goals and Achievements */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                <Target className="w-5 h-5" />
                Metas & Conquistas
              </h3>

              {/* Weekly Goal Progress */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/90 text-sm">Meta Semanal</span>
                  <span className="text-white font-semibold">{currentProgress}%</span>
                </div>
                <Progress value={currentProgress} className="h-2 bg-white/20" />
                <div className="text-white/70 text-xs mt-1">{weeklyGoal - currentProgress}% para completar</div>
              </div>

              {/* Recent Achievement */}
              <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm rounded-lg p-4 border border-yellow-300/30">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-yellow-300" />
                  <div>
                    <div className="text-white font-medium text-sm">Nova Conquista!</div>
                    <div className="text-white/80 text-xs">Sequência de 10 dias</div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                className={`w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-4 border border-white/30 transition-all duration-300 ${
                  isHovered ? "transform translate-y-[-2px]" : ""
                }`}
              >
                <div className="flex items-center justify-between text-white">
                  <span className="font-medium">Ver Relatório Completo</span>
                  <ChevronRight className="w-5 h-5" />
                </div>
              </button>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-4 right-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 border border-white/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats Bar */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Atividades Hoje", value: "5/7", color: "bg-blue-500" },
          { label: "Simulados", value: "12", color: "bg-green-500" },
          { label: "Redações", value: "8", color: "bg-purple-500" },
          { label: "Ranking", value: "#3", color: "bg-orange-500" },
        ].map((stat, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-8 ${stat.color} rounded-full`}></div>
                <div>
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
