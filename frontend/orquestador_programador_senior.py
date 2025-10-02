#!/usr/bin/env python3
"""
Orquestador Programador Senior - Agente especializado en desarrollo de software
"""

import sys
import json
import requests
from typing import Dict, Any, Optional

class OrquestadorProgramadorSenior:
    def __init__(self, ollama_url: str = "http://localhost:11434"):
        self.ollama_url = ollama_url
        self.model = "llama2"  # o cualquier modelo disponible

    def generar_codigo(self, prompt: str, lenguaje: str = "python") -> str:
        """Genera código usando Ollama"""
        system_prompt = f"""Eres un programador senior experto en {lenguaje}.
        Tu tarea es generar código de alta calidad, bien documentado y siguiendo las mejores prácticas.
        Siempre incluye comentarios explicativos y maneja errores apropiadamente.
        Responde únicamente con el código generado, sin explicaciones adicionales."""

        payload = {
            "model": self.model,
            "prompt": f"{system_prompt}\n\nSolicitud: {prompt}",
            "stream": False
        }

        try:
            response = requests.post(f"{self.ollama_url}/api/generate", json=payload)
            response.raise_for_status()
            result = response.json()
            return result.get("response", "")
        except Exception as e:
            return f"Error generando código: {str(e)}"

    def analizar_codigo(self, codigo: str) -> Dict[str, Any]:
        """Analiza código y proporciona feedback"""
        prompt = f"""Analiza el siguiente código y proporciona feedback constructivo:

{codigo}

Proporciona:
1. Fortalezas
2. Áreas de mejora
3. Sugerencias de optimización
4. Posibles bugs o problemas de seguridad"""

        respuesta = self.generar_codigo(prompt, "análisis")
        return {
            "analisis": respuesta,
            "codigo_original": codigo
        }

    def refactorizar_codigo(self, codigo: str, mejoras: str = "") -> str:
        """Refactoriza código existente"""
        prompt = f"""Refactoriza el siguiente código para mejorar su calidad, legibilidad y mantenibilidad.
        {mejoras}

Código original:
{codigo}

Proporciona únicamente el código refactorizado."""

        return self.generar_codigo(prompt, "refactorización")

def main():
    if len(sys.argv) < 2:
        print("Uso: python orquestador_programador_senior.py <comando> [argumentos...]")
        print("Comandos:")
        print("  generar <prompt> [lenguaje] - Genera código")
        print("  analizar <codigo> - Analiza código")
        print("  refactorizar <codigo> [mejoras] - Refactoriza código")
        return

    orquestador = OrquestadorProgramadorSenior()

    comando = sys.argv[1]

    if comando == "generar":
        if len(sys.argv) < 3:
            print("Error: Se requiere un prompt para generar código")
            return
        prompt = sys.argv[2]
        lenguaje = sys.argv[3] if len(sys.argv) > 3 else "python"
        resultado = orquestador.generar_codigo(prompt, lenguaje)
        print(resultado)

    elif comando == "analizar":
        if len(sys.argv) < 3:
            print("Error: Se requiere código para analizar")
            return
        codigo = sys.argv[2]
        analisis = orquestador.analizar_codigo(codigo)
        print(json.dumps(analisis, indent=2, ensure_ascii=False))

    elif comando == "refactorizar":
        if len(sys.argv) < 3:
            print("Error: Se requiere código para refactorizar")
            return
        codigo = sys.argv[2]
        mejoras = sys.argv[3] if len(sys.argv) > 3 else ""
        resultado = orquestador.refactorizar_codigo(codigo, mejoras)
        print(resultado)

    else:
        print(f"Comando desconocido: {comando}")

if __name__ == "__main__":
    main()
