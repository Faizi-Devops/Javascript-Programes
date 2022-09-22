const Hello =  (b:string[]) =>{
    let c:number=b.length;
    let result:string=b[Math.floor(Math.random()*c)];
    console.log(result)

}


let a:string[]=[
    "An essay is, generally, a piece of writing that gives the author's own argument, but the definition is vague, overlapping with those of a letter, a paper, an article, a pamphlet, and a short story.",
    "An essay is, generally, a piece of writing that gives the author's own argument, but the definition is vague, overlapping with those of a letter, a paper, an article, a pamphlet, and a short story.",
    "Essays are commonly used as literary criticism, political manifestos, learned arguments, observations of daily life, recollections, and reflections of the author. Almost all modern essays are written in prose, but works in verse have been dubbed essays (e.g., Alexander Pope's An Essay on Criticism and An Essay on Man). ",
    "While brevity usually defines an essay, voluminous works like John Locke's An Essay Concerning Human Understanding and Thomas Malthus's An Essay on the Principle of Population are counterexamples In some countries (e.g., the United States and Canada), essays have become a major part of formal education.[2] Secondary students are taught structured essay formats to improve their writing skills"
]

Hello(a)


