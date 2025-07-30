"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Calendar, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { tasks } from "@/lib/const"
import { Input } from "./ui/input"
import Link from "next/link"

export interface Task {
  id: string
  date: string
  description: string
  status: "completed" | "pending"
  details?: {
    type: string
    stage: string
    evaluation: string
    score: number
    correct: number
    performance: string
  }
}

export function TestCard() {
  const [selectedYear, setSelectedYear] = useState("2025")
  const [selectedClass, setSelectedClass] = useState("3ª série A - M")
  const [startDate, setStartDate] = useState("28/06/2025")
  const [endDate, setEndDate] = useState("29/07/2025")
  const [expandedTask, setExpandedTask] = useState<string | null>(null)

  const toggleExpanded = (taskId: string) => {
    setExpandedTask(expandedTask === taskId ? null : taskId)
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-sm mb-4">
        <Link href="/home" className="text-blue-600 hover:underline">
          Home
        </Link>
        <span className="text-gray-400">›</span>
        <Link href="/academico" className="text-blue-600 hover:underline">
          Acadêmico
        </Link>
        <span className="text-gray-400">›</span>
        <span className="text-gray-600">Avaliações e Boletim</span>
      </nav>

      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Avaliações e Boletim</h1>

      {/* Filter Section */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Escolha seus filtros</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Academic Year */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ano Letivo<span className="text-red-500">*</span>
              </label>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Class */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Turma<span className="text-red-500">*</span>
              </label>
              <Select value={selectedClass} onValueChange={setSelectedClass}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3ª série A - M">3ª série A - M</SelectItem>
                  <SelectItem value="3ª série B - M">3ª série B - M</SelectItem>
                  <SelectItem value="2ª série A - M">2ª série A - M</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Start Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Data de início das avaliações<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
                  placeholder="dd/mm/yyyy"
                />
              </div>
            </div>

            {/* End Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Data de fim das avaliações<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
                  placeholder="dd/mm/yyyy"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3">
            <Button variant="default" className="bg-blue-600 hover:bg-blue-700 text-white px-6">
              Visualizar Boletim
            </Button>
            <Button variant="default" className="bg-purple-600 hover:bg-purple-700 text-white px-6">
              Aplicar
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tasks Table */}
      <Card>
        <CardHeader className="pb-0">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-700">Minhas Tarefas</h2>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="font-semibold text-gray-700 w-32">Data</TableHead>
                <TableHead className="font-semibold text-gray-700">Descrição</TableHead>
                <TableHead className="font-semibold text-gray-700 w-48 text-center">Status</TableHead>
                <TableHead className="w-16"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tasks.map((task) => (
                <div key={task.id}>
                  <TableRow key={task.id} className="hover:bg-gray-50">
                    <TableCell className="font-medium text-gray-600">{task.date}</TableCell>
                    <TableCell className="text-gray-800">{task.description}</TableCell>
                    <TableCell className="text-center">
                      <Badge
                        variant={task.status === "completed" ? "default" : "secondary"}
                        className={
                          task.status === "completed"
                            ? "bg-green-100 text-green-700 hover:bg-green-100"
                            : "bg-purple-100 text-purple-700 hover:bg-purple-100"
                        }
                      >
                        {task.status === "completed" ? "Resultado liberado" : "Aguardando resultado"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {task.details && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleExpanded(task.id)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          {expandedTask === task.id ? (
                            <>
                              Ver menos <ChevronUp className="ml-1 h-4 w-4" />
                            </>
                          ) : (
                            <>
                              Ver mais <ChevronDown className="ml-1 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                  {expandedTask === task.id && task.details && (
                    <TableRow>
                      <TableCell colSpan={4} className="bg-gray-50 p-0">
                        <div className="p-6 border-t">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                              <div className="text-sm font-medium text-gray-600 mb-1">Tipo Avaliação:</div>
                              <div className="text-sm text-gray-800 italic">{task.details.type}</div>
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-600 mb-1">Etapa:</div>
                              <div className="text-sm text-gray-800 italic">{task.details.stage}</div>
                            </div>
                          </div>

                          <div className="mb-4">
                            <div className="text-sm font-medium text-gray-600 mb-2">Correção Online:</div>
                            <div className="text-sm text-blue-600">✓ Cartão-Resposta x Gabarito</div>
                          </div>

                          <Table>
                            <TableHeader>
                              <TableRow className="bg-white">
                                <TableHead className="font-semibold text-gray-700">Avaliação</TableHead>
                                <TableHead className="font-semibold text-gray-700 text-center">Nota</TableHead>
                                <TableHead className="font-semibold text-gray-700 text-center">Acertos</TableHead>
                                <TableHead className="font-semibold text-gray-700 text-center">Desempenho</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow>
                                <TableCell className="font-medium">{task.details.evaluation}</TableCell>
                                <TableCell className="text-center font-semibold">{task.details.score}</TableCell>
                                <TableCell className="text-center font-semibold">{task.details.correct}</TableCell>
                                <TableCell className="text-center font-semibold">{task.details.performance}</TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </div>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
